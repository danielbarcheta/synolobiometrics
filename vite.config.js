import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/synolobiometrics/', // 👈 adicionado para funcionar no GitHub Pages
  plugins: [react()]
})
