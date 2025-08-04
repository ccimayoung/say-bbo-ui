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
    dts({ insertTypesEntry: true }),
  ],
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        Button: resolve(__dirname, 'src/components/Button/index.ts'),
        Modal: resolve(__dirname, 'src/components/Modal/index.ts'),
        styles: resolve(__dirname, 'src/styles/index.ts'),
      },
      name: 'say-bbo-ui',
      formats: ['es', 'cjs'],
      fileName: (format, entryName) => {
        console.log(format, entryName);
        if (['Button', 'Modal', 'styled'].includes(entryName)) {
          return `components/${entryName}/index.${
            format === 'es' ? 'esm' : format
          }.js`;
        } else return `${entryName}.${format === 'es' ? 'esm' : format}.js`;
      },
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@emotion/react', '@emotion/styled'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@emotion/react': 'emotionReact',
          '@emotion/styled': 'emotionStyled',
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
