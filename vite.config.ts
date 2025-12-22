import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// oxlint-disable-next-line no-default-export
export default defineConfig({
  base: '/eka-frontend',
  plugins: [react(), tailwindcss()],
  resolve: {
    tsconfigPaths: true
  }
})
