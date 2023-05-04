import Vue from 'vue';
import { NuxtConfig } from '@nuxt/types';
import axios from '@nuxtjs/axios'

const config: NuxtConfig = {
  ssr: true,
  modules: [
    '@nuxtjs/axios',
    '@vuestic/nuxt',
  ],
  axios: {
    baseURL: 'https://localhost:1337/api/',
  },
  css: [
    '~/assets/styles/main.scss',
    'vuestic-ui/dist/vuestic-ui.css',
  ]
}

export default config
