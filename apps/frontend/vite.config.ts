import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/fairburntransserv.com/',
  plugins: [react(), tailwindcss(),],
  define: {
    VITE_API_URL: process.env.VITE_API_URL 
  }
})