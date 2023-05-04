// main.js
import { createApp } from 'vue'
import VuesticPlugin from 'vuestic-ui'

import RootComponent from '~/index.vue'

const app = createApp(RootComponent)
app.use(VuesticPlugin)

app.mount('#app')