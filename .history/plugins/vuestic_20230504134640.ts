import { Plugin } from '@nuxt/types'
import * as VuesticComponents from 'vuestic-ui'

const vuesticPlugin: Plugin = ({ app }) => {
  for (const [name, component] of Object.entries(VuesticComponents)) {
    app.component(name, component)
  }
}

export default vuesticPlugin