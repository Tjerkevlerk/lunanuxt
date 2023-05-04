import { createApp } from 'vue'
import VuesticPlugin from 'vuestic-ui'

import App from './App.vue'

const app = createApp(App)
app.use(VuesticPlugin)

app.mount('#app')