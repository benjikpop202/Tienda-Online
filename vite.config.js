
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // La clave es la ruta que usas en el frontend
      '/api': {
        target: 'https://carritoexpress-backend.onrender.com',  // URL de tu backend
        changeOrigin: true,
      // Opcional si no quieres el prefijo /api en el backend
      },
    },
  },
})
