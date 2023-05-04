// https://nuxt.com/docs/api/configuration/nuxt-config

import Vue from 'vue';
import { NuxtConfig } from '@nuxt/types';

const config: NuxtConfig = {
  modules: [
    '@nuxtjs/axios',
  ],
  plugins: [
    '~/plugins/vuestic.ts'
  ],
  axios: {
    baseURL: 'https://localhost:1337/api/',
  },
};

export default defineNuxtConfig({
  ssr: false,
  css: [
    '~/assets/styles/main.scss',
    'vuestic-ui/dist/vuestic-ui.css'
  ]
})