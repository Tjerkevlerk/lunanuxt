// https://nuxt.com/docs/api/configuration/nuxt-config

import Vue from 'vue';
import { NuxtConfig } from '@nuxt/types';

const config: NuxtConfig = {
  modules: [
    '@nuxtjs/axios',
  ],
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/vuetify',
  ],
  vuetify: {
    // Vuetify options here
  },
  axios: {
    baseURL: 'https://localhost:1337/api/',
  },
};

export default defineNuxtConfig({

  ssr: false,
  css: [
    '~/assets/styles/main.scss'
  ]
})
