import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'

import { tanstackStart } from '@tanstack/react-start/plugin/vite'

import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { nitro } from 'nitro/vite'

const base = process.env.GITHUB_PAGES === '1' ? '/highcaliberworkz-shop/' : '/'

const config = defineConfig({
  base,
  resolve: { tsconfigPaths: true },
  plugins: [
    devtools(),
    nitro({
      preset: 'node-server',
      rollupConfig: { external: [/^@sentry\//] },
    }),
    tailwindcss(),
    tanstackStart({
      spa: {
        enabled: true,
        prerender: {
          outputPath: '/index.html',
          crawlLinks: true,
          retryCount: 2,
        },
      },
      prerender: {
        enabled: true,
        crawlLinks: true,
        autoStaticPathsDiscovery: true,
      },
      pages: [
        { path: '/' },
        { path: '/shop' },
        { path: '/cart' },
        { path: '/checkout' },
        { path: '/about' },
        { path: '/character' },
        { path: '/la-isla-reina' },
        { path: '/shop/la-isla-reina-crop-top' },
        { path: '/shop/la-isla-reina-moto-crop-top' },
        { path: '/shop/la-isla-reina-pina-colada-crop-top' },
        { path: '/shop/la-isla-reina-waterfall-crop-top' },
        { path: '/shop/la-isla-reina-hoodie' },
        { path: '/shop/stay-blessed' },
        { path: '/shop/snacks-plans' },
        { path: '/shop/pr-dna' },
        { path: '/shop/freedom-weighs-a-ton' },
        { path: '/shop/bash-bros' },
        { path: '/shop/born-for-adversity' },
        { path: '/shop/stay-blessed-hoodie' },
        { path: '/shop/snacks-plans-hoodie' },
        { path: '/shop/pr-dna-hoodie' },
        { path: '/shop/freedom-weighs-a-ton-hoodie' },
        { path: '/shop/bash-bros-hoodie' },
        { path: '/shop/born-for-adversity-hoodie' },
        { path: '/shop/clock-in-square-up' },
        { path: '/shop/clock-in-square-up-hoodie' },
        { path: '/shop/el-gordo-figure' },
        { path: '/shop/high-caliber-3d-puff-cuffed-beanie' },
        { path: '/shop/high-caliber-waffle-beanie' },
        { path: '/shop/high-caliber-fisherman-beanie' },
        { path: '/shop/high-caliber-organic-ribbed-beanie' },
        { path: '/shipping' },
        { path: '/returns' },
        { path: '/privacy' },
      ],
    }),
    viteReact(),
  ],
})

export default config
