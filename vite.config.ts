import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig(() => {
  const plugins = [
    react({
      jsxImportSource: '@emotion/react',
      babel: { plugins: ['@emotion/babel-plugin'] },
    }),
  ];

  // STORYBOOK 환경이 아닐 때만 dts 플러그인 추가
  if (process.env.STORYBOOK !== 'true') {
    plugins.push(
      dts({
        insertTypesEntry: true,
        rollupTypes: true,
        logLevel: 'info',
        include: ['src/**/*'],
        exclude: [
          'src/**/*.stories.tsx',
          'src/**/*.test.tsx',
          'src/**/*.spec.tsx',
        ],
        beforeWriteFile: (filePath, content) => {
          return {
            filePath,
            content,
          };
        },
        copyDtsFiles: true,
      })
    );
  }

  return {
    plugins,
    build: {
      lib: {
        entry: {
          index: resolve(__dirname, 'src/index.ts'),
          Button: resolve(__dirname, 'src/components/Button/index.ts'),
          Modal: resolve(__dirname, 'src/components/Modal/index.ts'),
          Select: resolve(__dirname, 'src/components/Select/index.ts'),
          Icon: resolve(__dirname, 'src/components/Icon/index.ts'),
          styles: resolve(__dirname, 'src/styles/index.ts'),
        },
        name: 'say-bbo-ui',
        formats: ['es', 'cjs'],
        fileName: (format, entryName) => {
          if (
            ['Button', 'Modal', 'Select', 'Icon', 'styled'].includes(entryName)
          ) {
            return `components/${entryName}/index.${
              format === 'es' ? 'esm' : format
            }.js`;
          } else return `${entryName}.${format === 'es' ? 'esm' : format}.js`;
        },
      },
      rollupOptions: {
        external: (id) => {
          return ['react', 'react-dom', 'react/', '@emotion/'].some(
            (pkg) => id === pkg || id.startsWith(pkg)
          );
        },
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
            'react/jsx-runtime': 'jsxRuntime',
            'react-dom/client': 'ReactDOM',
            '@emotion/react': 'emotionReact',
            '@emotion/styled': 'emotionStyled',
            '@emotion/react/jsx-runtime': 'emotionJsxRuntime',
          },
          chunkFileNames: 'components/[name]/[name]-[hash].js',
        },
      },
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
  };
});
