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

    vuestic: {
      config: {
        colors: {
          variables: {
            // Default colors
            primary: "#23e066",
            secondary: "#002c85",
            success: "#40e583",
            info: "#2c82e0",
            danger: "#e34b4a",
            warning: "#ffc200",
            gray: "#babfc2",
            dark: "#34495e",

            // Custom colors
            yourCustomColor: "#d0f55d",
          },
        },
      },
    },
  });