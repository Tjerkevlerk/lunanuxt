<template>
  <div>
    <h1>FAQ</h1>
    <p>{{ data }}</p>
    <ul>
      <li v-for="faq in data.faqs" :key="faq.id">{{ faq.question }}</li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const data = ref({
      faqs: [
        {
          id: 1,
        }
      ]
    })
  }
}
</script>

<style lang="scss" scoped></style>