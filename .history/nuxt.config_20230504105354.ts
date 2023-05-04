// https://nuxt.com/docs/api/configuration/nuxt-config

import Vue from 'vue';
import { NuxtConfig } from '@nuxt/types';

const config: NuxtConfig = {
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    baseURL: 'https://localhost:3000',
  },
};

export default defineNuxtConfig({
  ssr: false,
  css: [
    '~/assets/styles/main.scss'
  ]
})
