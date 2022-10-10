import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import visualizer from 'rollup-plugin-visualizer'
import UnoCss from 'unocss/vite'
import { transformerDirectives, transformerVariantGroup } from 'unocss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    UnoCss({
      shortcuts: {
        fc: 'flex items-center',
        fcb: 'flex items-center justify-between',
        fcc: 'flex items-center justify-center',
        fccc: 'flex items-center justify-center flex-col',
        card: 'rounded shadow m-4 p-4',
      },
      transformers: [transformerDirectives(), transformerVariantGroup()],
      postcss: true,
    }),
  ],
  build: {
    rollupOptions: {
      plugins: [
        visualizer({
          gzipSize: true,
          brotliSize: true,
        }),
      ],
    },
  },
})
