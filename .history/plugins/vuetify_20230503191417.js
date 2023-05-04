import { Plugin } from '@nuxt/types';
import Vuetify from 'vuetify/lib/framework';

const vuetifyPlugin: Plugin = ({ app }) => {
  app.vuetify = new Vuetify({
    // configureer hier de opties van Vuetify
  });
};

export default vuetifyPlugin;