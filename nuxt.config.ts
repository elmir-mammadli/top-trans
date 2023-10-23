// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    'vuetify/lib/styles/main.sass',
    '~/assets/css/main.css',
    '@mdi/font/css/materialdesignicons.min.css',
    'primevue/resources/themes/lara-light-blue/theme.css',
    'primevue/resources/primevue.css',
  ],
  modules: [
    '@notkamui/nuxt-primevue',
    'nuxt-headlessui',
    'nuxt-icon',
    '@vee-validate/nuxt'
  ],
  headlessui: {
    prefix: 'Headless'
},
primevue: {
  includeChart: true, // default: false
  includeEditor: true,
},
plugins: [
  { src: '~/plugins/aos', mode: 'client' },
],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
  app:{
    head: {
      link: [
        // Inter font
        {
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap',
          rel: 'stylesheet'
        },
        // Montserrat font
        {
          href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap',
          rel: 'stylesheet'
        },
      ],
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
})
