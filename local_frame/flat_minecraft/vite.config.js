import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  base: '/local_frame/flat_minecraft', 
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        game: resolve(__dirname, 'game.html')
      }
    },
    outDir: 'dist'
  }
})
