// https://nuxt.com/docs/api/configuration/nuxt-config

import Vue from 'vue';
import { NuxtConfig } from '@nuxt/types';

const config: NuxtConfig = {
  // ...
  plugins: [
    // ...
    '~/plugins/vuetify.ts',
  ],
  // ...
};

export default defineNuxtConfig({
  ssr: true,
  css: [
    '~/assets/styles/main.scss'
  ]
})
