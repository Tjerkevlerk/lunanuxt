// main.js
import { createApp } from 'vue'
import VuesticPlugin from 'vuestic-ui'

import RootComponent from '~/pagesindex.vue'

const app = createApp(RootComponent)
app.use(VuesticPlugin)

app.mount('#app')