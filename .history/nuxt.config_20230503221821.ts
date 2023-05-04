// https://nuxt.com/docs/api/configuration/nuxt-config

import Vue from 'vue';
import { NuxtConfig } from '@nuxt/types';

const config: NuxtConfig = {
  // ...
  plugins: [
    // ...
    '~/plugins/vuetify.ts',
  ],
  css: [
    // ...
    '~/node_modules/vuetify/dist/vuetify.min.css',
    '~/node_modules/@mdi/font/css/materialdesignicons.min.css',
  ],
  // ...
};

export default defineNuxtConfig({
  ssr: false,
  css: [
    '~/assets/styles/main.scss'
  ]
})
