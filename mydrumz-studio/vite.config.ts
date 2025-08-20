import { defineConfig } from 'vite'

export default defineConfig({
  css: {
    // Desactiva PostCSS por completo
    postcss: undefined
  },
  server: {
    hmr: {
      overlay: false // opcional: oculta la superposición de errores
    }
  }
})
