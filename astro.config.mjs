import { defineConfig } from 'astro/config'

export default defineConfig({
  server: { host: true, port: 3000 },
  vite: { server: { allowedHosts: true } },
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: { prefixDefaultLocale: false },
  },
})
