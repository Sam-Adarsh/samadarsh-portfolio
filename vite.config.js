import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/samadarsh-portfolio/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        haugtun: resolve(__dirname, 'haugtun/index.html'),
      },
    },
  },
});
