import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
    minify: 'esbuild',
    assetsDir: 'assets',
    copyPublicDir: true
  },
  server: {
    port: 3000,
    host: true
  },
  publicDir: 'public'
})
