/// <reference types="vitest" />
import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: 'demo',
  plugins: [react()],
  test: {
    root: './',
  },
})
