<template>
  <div>
    <h1>FAQ</h1>
    <ul v-if="faqsLoaded">
      <li v-for="(faq, index) in faqs" :key="index">{{ faq.question }}</li>
    </ul>
    <p v-else>Loading faqs...</p>
  </div>
  <div id="test">{{ faqs }}</div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const faqs = ref([]);
    const isLoading = ref(true);

    // Gebruik onMounted() om te wachten met het laden van faq's tot de component gemount is
    onMounted(async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/faqs');
        faqs.value = response.data;
        isLoading.value = false;
      } catch (error) {
        console.log('Error while fetching FAQs:', error);
        isLoading.value = false;
      }
    });

    const faqsLoaded = computed(() => {
      return faqs.value.length > 0;
    });

    return { faqs, isLoading, faqsLoaded };
  },
};
</script>