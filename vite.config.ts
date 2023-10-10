import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import generouted from '@generouted/react-router/plugin'
import path from 'path'
import dotenv from 'dotenv'

dotenv.config()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), generouted()],
  resolve: {
    alias: { '@': path.resolve(__dirname, 'src') },
  },
  base: process.env.BASE_PATH
})
