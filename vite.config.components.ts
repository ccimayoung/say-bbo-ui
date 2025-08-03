import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

const components = ['button', 'modal', 'all'];

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        ...components.reduce((acc, component) => {
          acc[component] = resolve(__dirname, `src/${component}/index.ts`);
          return acc;
        }, {} as Record<string, string>),
      },
      external: ['react', 'react-dom', '@emotion/react', '@emotion/styled'],
      output: {
        format: 'es',
        dir: 'dist',
        entryFileNames: '[name].esm.js',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@emotion/react': 'emotionReact',
          '@emotion/styled': 'emotionStyled',
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
