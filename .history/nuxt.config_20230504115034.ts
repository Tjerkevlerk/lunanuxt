import Vue from 'vue';
import { NuxtConfig } from '@nuxt/types';

const config: NuxtConfig = {
  plugins: [
    '~/plugins/vuestic-ui.ts'
  ],
  modules: [
    '@nuxtjs/axios',
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
