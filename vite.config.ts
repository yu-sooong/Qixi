// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? ''
const isCI = process.env.GITHUB_ACTIONS === 'true'

export default defineConfig({
  plugins: [vue()],
  base: isCI ? `/${repo}/` : '/',
})
