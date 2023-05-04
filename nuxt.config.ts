import Vue from 'vue';
import { NuxtConfig } from '@nuxt/types';
import PrimeVue from 'primevue/config';

const config: NuxtConfig = {
  modules: [
    '@nuxtjs/axios',
  ],
  buildModules: [
    '@nuxt/typescript-build'
  ],
  axios: {
    baseURL: 'https://localhost:1337/api/',
  },
};

export default defineNuxtConfig({

  ssr: false,
  css: [
    `~/node_modules/primevue/resources/themes/saga-blue/theme.css`,
    '~/node_modules/primeflex/primeflex.css',
    '~/assets/styles/main.scss',
  ],
  plugins: [
    '@/plugins/primevue.ts'
  ],
})
