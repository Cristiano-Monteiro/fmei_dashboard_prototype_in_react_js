import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/fmei_dashboard_prototype_in_react_js',
  plugins: [react()],
})
