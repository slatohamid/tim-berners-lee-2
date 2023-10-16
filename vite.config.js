import { defineConfig } from 'vite'

const path = require("path");
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
          '@': require('path').resolve(__dirname, 'src')
        }
      },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
})```