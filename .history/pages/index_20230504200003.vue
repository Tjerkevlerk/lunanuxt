
<template>
  <h1>Homepage</h1>
  <Calendar v-model="date" />
  <Button label="Submit" />
</template>

<script>
import { createApp } from 'vue'
import Calendar from 'primevue/calendar'

export default {

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

