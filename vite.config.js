import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default {
  base: './',  // Change from '/portfolio-website/' to './'
  plugins: [react()]
}
