// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Waves-App/', // ← THIS IS CRUCIAL
  plugins: [react()],
})