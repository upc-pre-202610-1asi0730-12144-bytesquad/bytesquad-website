import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/bytesquad-website/',  // ← add this
  plugins: [vue()],
  server: {
    port: 4200,
    open: true
  }
})