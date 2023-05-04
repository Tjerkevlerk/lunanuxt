import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
// import Button from 'primevue/button'
// import InputText from 'primevue/inputtext'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

export default function (context) {

  const app = createApp(context.app)

  app.use(PrimeVue)
  // app.component('Button', Button)
  // app.component('InputText', InputText)

  context.app = app
}