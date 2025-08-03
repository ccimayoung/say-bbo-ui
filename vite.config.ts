import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
    svgr({
      svgrOptions: {
        icon: true,
      },
    }),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        button: resolve(__dirname, 'src/components/Button/index.ts'),
        modal: resolve(__dirname, 'src/components/Modal/index.ts'),
      },
      name: 'saybboUI',
      formats: ['es', 'cjs'],
      fileName: (format, entryName) => {
        const componentsList = ['button', 'modal'];
        if (componentsList.includes(entryName)) {
          return `components/${entryName}/index.${
            format === 'es' ? 'esm' : format
          }.
            js`;
        }
        return `$
          {entryName}.${format === 'es' ? 'esm' : format}.js`;
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
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
