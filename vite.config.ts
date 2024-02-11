import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ignite-feed',
  plugins: [react({
    include: "**/*.jsx"
  })],
  server: {
    watch: {
      usePolling: true
    }
  }
})
