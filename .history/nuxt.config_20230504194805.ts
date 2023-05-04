import Vue from 'vue';
import { NuxtConfig } from '@nuxt/types';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/saga-blue/theme.css';

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
    '~/assets/styles/main.scss',
  ],
  plugins: [
    '@/plugins/primevue.ts'
  ],
})
