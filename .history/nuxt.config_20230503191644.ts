// nuxt.config.ts

import { NuxtConfig } from '@nuxt/types';
import { Configuration } from 'webpack';
import vuetify from './plugins/vuetify';

const config: NuxtConfig = {
  // Nuxt 3 modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/composition-api/module',
  ],

  // Vuetify configuration
  vuetify,

  // Webpack configuration
  build: {
    extend(config: Configuration) {
      // Add support for TypeScript in Vue single-file components
      config.module?.rules.push({
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            ts: 'ts-loader',
            tsx: 'babel-loader!ts-loader',
          },
        },
      });
    },
  },
};

export default config;
