import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/asea-eng/', // GitHub Pages용 base URL 제거
  base: '/', // 루트 도메인용으로 변경
  build: {
    outDir: 'dist',
    sourcemap: false, // 프로덕션에서는 소스맵 제거
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['framer-motion', 'lucide-react', 'swiper']
        }
      }
    }
  },
  server: {
    port: 5173,
    host: true
  },
  preview: {
    port: 4173,
    host: true
  }
})