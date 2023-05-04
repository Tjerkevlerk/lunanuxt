<template>
  <div>
    <h1>{{ page.title }}</h1>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      page: {},
    };
  },
  async mounted() {
    try {
      const response = await axios.get('http://localhost:1337/api/Pages/3');
      this.page = response.data;
    } catch (error) {
      console.log('Error while fetching page content:', error);
    }
  },
};
</script>

<style scoped></style>