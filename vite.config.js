import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '',  // 저장소명으로 바꿔주세요
  plugins: [react()],
})
