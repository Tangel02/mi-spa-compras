import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/mi-spa-compras/',  // 👈 debe ser EXACTAMENTE igual que tu repo
  plugins: [vue()],
})
