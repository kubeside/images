import { defineConfig } from "vite";
import topLevelAwait from "vite-plugin-top-level-await";

export default defineConfig({
    server:{
        proxy:{
            '/api': {
                target: 'https://adventofcode.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            }
        }
    },
    plugins: [
        topLevelAwait()
    ]
    
})
