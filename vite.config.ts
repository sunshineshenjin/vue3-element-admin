import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import autoprefixer from 'autoprefixer'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ ElementPlusResolver() ],
    }),
    Components({
      resolvers: [ ElementPlusResolver() ],
    })
  ],
  css: {
    postcss: './postcss.config.js'
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  }
})
