import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/<REPO-NAME>/', // <- cambiar por tu repo si publicas en Pages
  plugins: [vue()],
})
