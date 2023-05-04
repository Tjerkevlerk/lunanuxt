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
        console.log('Sending request to server...');
        const response = await axios.get('http://localhost:1337/faqs');
        console.log('Received response from server:', response.data);
        faqs.value = response.data;
      } catch (error) {
        console.log('Error while fetching FAQs:', error);
      }
    }

    getFaqs();

    return { faqs };
  },
}
</script>

<style lang="scss" scoped></style>