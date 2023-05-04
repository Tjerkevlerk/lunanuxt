<template>
  <div>
    <h1>FAQ</h1>
    <ul v-if="faqs.length">
      <li v-for="faq in faqs" :key="faq.question">{{ faq.question }}</li>
    </ul>

    <p v-else>Loading faqs...</p>
    <p>{{ faqs }}</p>
  </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const faqs = ref([]);
    const isLoading = ref(true);
    async function getFaqs() {
      try {
        console.log('Sending request to server...');
        const response = await axios.get('http://localhost:1337/api/faqs');
        console.log('Received response from server:', response.data);
        faqs.value = response.data;
      } catch (error) {
        console.log('Error while fetching FAQs:', error);
      }
    }

    getFaqs();

    return { faqs, isLoading };
  },
}
</script>

<style lang="scss" scoped></style>