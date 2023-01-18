import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/SVG-animation-acronym/',
  define: {
    'process.env': {},
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/scss/_variables.scss";',
      },
    },
  },
});
