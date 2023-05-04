<template>
  <div>
    <h1>FAQ</h1>
    <ul v-if="faqsLoaded">
      <li v-for="faq in faqs" :key="faq.id">{{ faq.question }}</li>
    </ul>
    <p v-else>Loading faqs...</p>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
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
        isLoading.value = false;
      } catch (error) {
        console.log('Error while fetching FAQs:', error);
        isLoading.value = false;
      }
    }

    getFaqs().then(() => {
      console.log('FAQs loaded');
    });

    const faqsLoaded = computed(() => {
      return faqs.value.length > 0;
    });

    return { faqs, isLoading, faqsLoaded };
  },
}
</script>