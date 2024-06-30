import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      assets: '/src/assets',
      modules: '/src/modules',
      hooks: '/src/hooks',
      pages: '/src/pages',
      '@redux': '/src/redux',
      components: '/src/components',
      helpers: '/src/helpers',
      context: '/src/context',
      services: '/src/services',
    },
  },
  build: {
    sourcemap: true,
  },
});
