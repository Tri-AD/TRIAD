import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', // ✅ required for GitHub Pages direct branch deploy
  plugins: [react()],
  build: {
    outDir: 'docs', // ✅ GitHub Pages will serve this folder
    assetsDir: 'assets',
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
