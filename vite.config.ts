import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// The site is published to https://kulick23.github.io/resume/, so every asset
// URL has to be prefixed with the repository name.
// https://vite.dev/config/
export default defineConfig({
  base: '/resume/',
  plugins: [react()],
  build: {
    target: 'es2020',
    cssTarget: 'chrome80',
    // Everything below this size is inlined as a data URI instead of costing a request.
    assetsInlineLimit: 2048,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          i18n: ['i18next', 'react-i18next'],
        },
      },
    },
  },
});
