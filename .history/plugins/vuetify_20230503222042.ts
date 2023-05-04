import { Plugin } from '@nuxt/types';
import * as Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.min.css';

const vuetifyPlugin: Plugin = ({ app }) => {
  app.vuetify = new Vuetify({
    // configureer Vuetify hier
  });
};

export default vuetifyPlugin;