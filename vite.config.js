import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: process.env.GITHUB_PAGES ? '/All-In-One-Classroom-System/' : '/',
  plugins: [react(), tailwindcss()],
})