import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Base path for GitHub Pages - comment this out for other deployment methods
  // base: '/award-winning-website/',
  plugins: [react()],
})
