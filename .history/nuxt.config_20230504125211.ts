import Vue from 'vue';
import { NuxtConfig } from '@nuxt/types';


const config: NuxtConfig = {
  ssr: true,
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
    baseURL: 'https://localhost:1337/api/',
  },
  css: [
    '~/assets/styles/main.scss'
  ]
}

export default config
