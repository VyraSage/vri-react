import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: path.join(__dirname, "dist"),
    rollupOptions: {
      external: ['uuid'], // Add 'uuid' to the external dependencies
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})