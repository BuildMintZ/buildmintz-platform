import { defineConfig } from 'vite'

export default defineConfig({
  // Set base to your repository name
  base: '/buildmintz/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  server: {
    port: 3000,
    open: true
  }
})