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
    const items = ref([]);

    async function getItems() {
      try {
        const response = await axios.get('http://localhost/api/items');
        items.value = response.data;
      } catch (error) {
        console.log(error);
      }
    }

    getItems();

    return { items };
  },
}
</script>

<style lang="scss" scoped></style>