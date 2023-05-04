import { Plugin } from '@nuxt/types'
import VuesticPlugin from 'vuestic-ui'

const vuesticPlugin: Plugin = ({ app }) => {
  app.use(VuesticPlugin)
}

export default vuesticPlugin
