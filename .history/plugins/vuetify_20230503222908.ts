import { defineNuxtPlugin } from '@nuxtjs/composition-api';
import Vuetify from 'vuetify/lib/framework';
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.min.css';

export default defineNuxtPlugin(({ app }) => {
  const vuetify = new Vuetify({
    // configureer Vuetify hier
  });
  app.use(vuetify);
});