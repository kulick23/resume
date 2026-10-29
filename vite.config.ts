import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative asset URLs work both at a domain root (Vercel) and when the site is
// published inside a subdirectory (GitHub Pages at /resume/).
// https://vite.dev/config/
export default defineConfig({
  base: './',
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
