<template>
  <ul>
    <li v-for="(faq, index) in faqs" :key="index">{{ faq.question }}</li>
  </ul>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      faqs: []
    };
  },
  mounted() {
    this.fetchFaqs();
  },
  methods: {
    async fetchFaqs() {
      try {
        const response = await axios.get('http://localhost:1337/api/faqs');
        this.faqs = response.data;
      } catch (error) {
        console.log('Error while fetching FAQs:', error);
      }
    }
  }
};
</script>