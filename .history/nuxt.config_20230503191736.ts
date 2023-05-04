// nuxt.config.ts

import { NuxtConfig } from '@nuxt/types';
import vuetify from './plugins/vuetify';

const config: NuxtConfig = {
  // Nuxt 3 modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/composition-api/module',
  ],

  // Vuetify configuration
  vuetify,

  // Vite configuration
  vite: {
    // Add support for TypeScript in Vue single-file components
    vue: {
      template: {
        compilerOptions: {
          isCustomElement: (tag: string) => tag.startsWith('ion-'),
        },
      },
    },
  },
};

export default config;