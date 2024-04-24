// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['./assets/css/reset.css'],

  components: [
    {
      path: './components',
      pathPrefix: false,
    },
  ],

  modules: ['nuxt-icons'],
})