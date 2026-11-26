import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const [owner, repository] = process.env.GITHUB_REPOSITORY?.split('/') ?? []
const base =
  repository && repository !== `${owner}.github.io` ? `/${repository}/` : '/'

export default defineConfig({
  base,
  plugins: [vue()],
})
