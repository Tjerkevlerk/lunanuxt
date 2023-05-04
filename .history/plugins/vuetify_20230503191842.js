// plugins/vuetify.ts

import { Plugin } from '@nuxt/types';
import Vuetify from 'vuetify/lib/framework';

const vuetifyPlugin: Plugin = ({ app }) => {
  const vuetify = new Vuetify({
    // configureer hier de opties van Vuetify
  });
  app.use(vuetify);
};

export default vuetifyPlugin;