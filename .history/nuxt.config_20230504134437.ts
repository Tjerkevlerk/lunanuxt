import Vue from 'vue';
import { NuxtConfig } from '@nuxt/types';
import * as VuesticComponents from 'vuestic-ui'

const config: NuxtConfig = {
  modules: [
    '@nuxtjs/axios',
  ],
  plugins: [
    '@/plugins/vuestic.ts'
  ],
  axios: {
    baseURL: 'https://localhost:1337/api/',
  },
};

const vuesticPlugin: Plugin = ({ app }) => {
  for (const [name, component] of Object.entries(VuesticComponents)) {
    app.component(name, component)
  }
}

export default defineNuxtConfig({
  ssr: false,
  css: [
    '~/assets/styles/main.scss',
    'vuestic-ui/dist/vuestic-ui.css'
  ]
})

export { vuesticPlugin };