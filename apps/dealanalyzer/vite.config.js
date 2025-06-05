// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/apps/dealanalyzer/', // <-- This is the key line!
  plugins: [react()],
})
