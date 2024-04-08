/// <reference types="vitest" />
import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: 'demo',
  base: '/react-refractor',
  plugins: [react()],
  test: {
    root: './',
  },
})
