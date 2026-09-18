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
        { path: '/partners' },
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
        { path: '/shop/el-gordo-figure' },
        { path: '/shop/rolling-tray' },
      ],
    }),
    viteReact(),
  ],
})

export default config
