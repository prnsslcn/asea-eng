import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/asea-eng/', // 레포지토리 이름과 일치해야 함
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})