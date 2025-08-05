import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // 🚀 Optimisations de build pour la production
    target: 'esnext',
    minify: 'terser',
    cssMinify: true,
    rollupOptions: {
      output: {
        // 📦 Code splitting pour de meilleurs performances
        manualChunks: {
          'framer-motion': ['framer-motion'],
          'lucide-react': ['lucide-react'],
        }
      }
    },
    // 🗜️ Compression des assets
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 1000,
  },
  // ⚡ Optimisations du serveur de dev
  server: {
    port: 3000,
    host: true
  }
})
