import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // ✅ crucial: fixes blank page / broken assets when deploying from a branch
  plugins: [react()],
  build: {
    outDir: 'dist', // ✅ ensures all build files go here
    assetsDir: 'assets', // optional, keeps your files organized
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    port: 5173, // optional, ensures consistent local dev port
  },
});
