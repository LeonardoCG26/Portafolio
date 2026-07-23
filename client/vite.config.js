import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Separa las librerias en chunks propios para que el navegador los
        // cachee entre despliegues (solo se re-descargan si la libreria cambia).
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          // Framer Motion se reparte en varios paquetes; los agrupamos todos.
          if (/[\\/]node_modules[\\/](framer-motion|motion-dom|motion-utils)[\\/]/.test(id)) {
            return 'motion'
          }
          if (/[\\/]node_modules[\\/](react|react-dom|react-router|react-router-dom|scheduler)[\\/]/.test(id)) {
            return 'react-vendor'
          }
          return 'vendor'
        },
      },
    },
  },
})
