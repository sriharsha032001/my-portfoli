import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/my-portfoli/', // 👈 use your repo name here
  plugins: [react()],
})
