// https://nuxt.com/docs/api/configuration/nuxt-config

import Vue from 'vue';

const config: NuxtConfig = {
  // ...
  plugins: [
    // ...
    '~/plugins/vuetify.ts',
  ],
  // ...
};

export default defineNuxtConfig({
  ssr: false,
  css: [
    '~/assets/styles/main.scss'
  ]
})
