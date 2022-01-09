import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import autoprefixer from 'autoprefixer'
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true
  },
  plugins: [vue()],
  css: {
    postcss: './postcss.config.js'
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  }
})
