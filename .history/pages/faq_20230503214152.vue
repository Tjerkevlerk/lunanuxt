<template>
  <div>
    <h1>FAQ's uit Strapi</h1>
    <ul v-if="!isLoading">
      <li v-for="(faq, index) in faqs" :key="index">{{ faq.attributes.Question }}</li>
    </ul>
    <p v-else>Loading faqs...</p>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const faqs = ref([]);

    // Use onMounted() to wait for the component to mount before fetching the FAQs
    onMounted(async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/faqs');
        faqs.value = response.data.data;
      } catch (error) {
        console.log('Error while fetching FAQs:', error);
      }
    });

    return { faqs };
  },
};
</script>