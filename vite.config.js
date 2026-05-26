import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/samadarsh-portfolio/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        haugtun: resolve(__dirname, 'haugtun/index.html'),
      },
    },
  },
});
