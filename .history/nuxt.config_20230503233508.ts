// https://nuxt.com/docs/api/configuration/nuxt-config

import Vue from 'vue';
import { NuxtConfig } from '@nuxt/types';

const config: NuxtConfig = {
  buildModules: [
    'bootstrap-vue/nuxt',
  ],
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    baseURL: 'https://api.example.com',
  },
};

export default defineNuxtConfig({
  ssr: false,
  css: [
    '~/assets/styles/main.scss'
  ]
})
