import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: this must match your GitHub repo name exactly, including
// capitalization, or your deployed site will load a blank page.
export default defineConfig({
  plugins: [react()],
  base: '/muhammadsufiyan-dev/',
})
