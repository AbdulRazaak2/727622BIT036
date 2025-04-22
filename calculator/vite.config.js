import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/evaluation-service': {
        target: 'http://20.244.56.144',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})
