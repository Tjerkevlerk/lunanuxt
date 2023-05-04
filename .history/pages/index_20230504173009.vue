
<template>
  <v-card>
    <h1>Homepage</h1>
    <Calendar v-model="date" />
  </v-card>
</template>

<script>
import { createApp } from 'vue'

export default {
  import Calendar from 'primevue/calendar',
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

