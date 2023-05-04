<template>
  <div>
    <h1>FAQ</h1>
    <ul v-if="faqsLoaded">
      <li v-for="(faq, index) in faqs" :key="index">{{ faq.question }}</li>
    </ul>
    <p v-else>Loading faqs...</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      faqs: [],
      isLoading: true,
    };
  },
  mounted() {
    this.fetchFaqs();
  },
  methods: {
    async fetchFaqs() {
      try {
        const response = await axios.get('http://localhost:1337/api/faqs');
        this.$set(this, 'faqs', response.data);
        this.isLoading = false;
      } catch (error) {
        console.log('Error while fetching FAQs:', error);
        this.isLoading = false;
      }
    },
  },
  computed: {
    faqsLoaded() {
      return this.faqs.length > 0;
    },
  },
};
</script>