import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        myGame: path.resolve(__dirname, 'local_frame/flat_minecraft/game.html')
      },
    },
    outDir: 'dist',
    emptyOutDir: true,
  },
});
