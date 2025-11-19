import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, writeFileSync } from 'fs'
import { join } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'github-pages-files',
      closeBundle() {
        // Copy CNAME file to dist for GitHub Pages
        try {
          copyFileSync('CNAME', join('dist', 'CNAME'))
        } catch (err) {
          // CNAME might not exist, that's okay
        }
        // Create .nojekyll file to ensure GitHub Pages serves files correctly
        writeFileSync(join('dist', '.nojekyll'), '')
      }
    }
  ],
  base: '/',
})

