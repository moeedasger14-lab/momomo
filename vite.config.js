import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   server: {
    //port: 5173,        // 👈 fixed frontend port
    //strictPort: true,  // 👈 fail if port is busy
  },
})
