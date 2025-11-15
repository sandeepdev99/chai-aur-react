import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// vite.config.js
import { defineConfig } from 'vite';

// https://vite.dev/config/



export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ],
  base: '/chai-aur-react/06currencyConverter/',
})
