import { Plugin } from '@nuxt/types';
import * as Vuetify from 'vuetify';

const vuetifyPlugin: Plugin = ({ app }) => {
  const vuetify = new Vuetify({
    // configureer Vuetify hier
  });
  app.use(vuetify);
};

export default vuetifyPlugin;