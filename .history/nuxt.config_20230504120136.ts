import Vue from 'vue';
import { NuxtConfig } from '@nuxt/types';

const config: NuxtConfig = {
  modules: [
    '@nuxtjs/axios',
    "@vuestic/nuxt"
  ],
  axios: {
    baseURL: 'https://localhost:1337/api/',
  },
  vuestic: {
    config: {
      // Config here
    },
  },

  export default defineNuxtConfig({
    modules: ["@vuestic/nuxt"],
  })
};