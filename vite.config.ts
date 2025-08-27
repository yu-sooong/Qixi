// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? ''
const isCI = process.env.GITHUB_ACTIONS === 'true'
const baseUrl = isCI ? `/${repo}/` : '/'
const siteUrl = isCI ? `https://ting.github.io/${repo}/` : 'http://localhost:5173/'

export default defineConfig({
  plugins: [
    vue(),
    {
      name: 'replace-meta-tags',
      transformIndexHtml(html) {
        return html
          .replace(/%VITE_BASE_URL%/g, siteUrl)
          .replace(/%VITE_SITE_URL%/g, siteUrl)
      }
    }
  ],
  base: baseUrl,
})
