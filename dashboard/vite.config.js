import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // ← ¡IMPORTANTE! Esto soluciona rutas de assets
  build: {
    outDir: 'dist'
  }
})