import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/website2025/",
  plugins: [react()],
  css: {
    preprocessorOptions: {
      sass: {
        api: 'modern-compiler', // or "modern", "legacy"
      },
    },
  },
})
