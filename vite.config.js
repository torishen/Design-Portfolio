import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
  css: {
    modules: {
      // lets you write .hero-title in CSS and use styles.heroTitle in JSX
      localsConvention: 'camelCase',
    },
  },
})
