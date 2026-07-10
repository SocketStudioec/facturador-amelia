import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Multi-página: la landing + una página por giro de negocio.
// En hosting estático quedan como /contadores/index.html, etc.
export default defineConfig({
  plugins: [react()],
  base: '/demo-aplicaciones/facturador-amelia/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        contadores: resolve(__dirname, 'contadores/index.html'),
        emprendedores: resolve(__dirname, 'emprendedores/index.html'),
        b2b: resolve(__dirname, 'b2b/index.html'),
      },
    },
  },
})
