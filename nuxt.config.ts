import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/content',
  ],

  components: {
    dirs: [
      {
        path: '~/components/ui',
        extensions: ['.vue'],
        pathPrefix: false,
      },
      '~/components',
    ],
  },

  devtools: {
    enabled: true,
  },

  app: {
    rootAttrs: {
      id: 'app',
    },

    head: {
      titleTemplate: '%s - UI',
      title: 'UI',

      style: [
        { textContent: '@layer theme, base, components, utilities;' },
      ],
    },
  },

  css: [
    '~/assets/css/main.css',
  ],

  routeRules: {
    '/docs': {
      redirect: '/docs/components/alert',
    },
    '/docs/components': {
      redirect: '/docs/components/alert',
    },
  },

  future: {
    compatibilityVersion: 4,
  },

  features: {
    inlineStyles: false,
  },

  experimental: {
    payloadExtraction: false,
  },

  compatibilityDate: '2024-11-01',

  nitro: {
    preset: 'github-pages',
  },

  vite: {
    build: {
      cssCodeSplit: false,
    },

    plugins: [
      tailwindcss(),
    ],
  },

  eslint: {
    config: {
      stylistic: true,
    },
  },
})
