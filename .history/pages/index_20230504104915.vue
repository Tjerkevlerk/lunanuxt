
<template>
  <div>
    <h1>Homepage</h1>
  </div>
</template>

<script>
import { createApp } from 'vue'
import VuesticPlugin from 'vuestic-ui'

export default {
  mounted() {
    const app = createApp(this)
    app.use(VuesticPlugin)
    app.mount('#app')
  },
  layout: 'default',
  name: 'Homepage',
  created() {

  },
  data() {
    return {
    }
  },
  props: {

  },
  methods: {

  },
}
</script>

<style lang="scss" scoped></style>

