import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Served from https://charlesimbeau-tech.github.io/aplus-study/
export default defineConfig({
  base: '/aplus-study/',
  plugins: [react()],
})
