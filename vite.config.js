// vite.config.ts
import Unocss from 'unocss/vite'

export default {
    plugins: [
        Unocss({ /* options */ }),
    ],
    build: {
        outDir: 'docs'
    },
    base: '/truck-landing/',
}
