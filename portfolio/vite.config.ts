import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: '.',  // This should be the current directory
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})