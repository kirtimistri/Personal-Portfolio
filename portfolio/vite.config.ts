import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',  // Change from 'dist/client' to 'dist'
    emptyOutDir: true
  },
  base: '/'
})