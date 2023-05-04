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
    const faqs = ref([]);

    async function getFaqs() {
      try {
        const response = await axios.get('http://localhost:1337/faqs');
        faqs.value = response.data;
      } catch (error) {
        console.log('error: ' + error);
      }
    }

    getFaqs();

    return { faqs };
  },
}
</script>

<style lang="scss" scoped></style>