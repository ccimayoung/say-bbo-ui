import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: { plugins: ['@emotion/babel-plugin'] },
    }),
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
        // 타입 정의 파일의 품질을 개선
        return {
          filePath,
          content,
        };
      },
      copyDtsFiles: true,
    }),
  ],
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
        console.log(format, entryName);
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
});
