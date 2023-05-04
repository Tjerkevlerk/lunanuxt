
<template>
  <h1>Homepage</h1>
  <Calendar v-model="date" />
  <Button label="Submit" />
</template>

<script>
import { createApp } from 'vue'
import Calendar from '@/primevue/calendar'
import Calendar from 'node_modules/primevue/calendar/Calendar.vue'

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

