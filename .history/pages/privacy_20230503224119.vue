<template>
  <div>
    <div v-for="page in pages" :key="page.id">
      <h1>{{ page.title }}</h1>
      <div v-html="page.content"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios';

setup() {
  const pages = ref([]);

  // Use onMounted() to wait for the component to mount before fetching the pages

  onMounted(async () => {
    try {
      const response = await axios.get('http://localhost:1337/api/pages/privacy');
      pages.value = response.data.data;
    } catch (error) {
      console.log('Error while fetching page:', error);
    }
  });

  return { pages };
},
};
</script>

<style scoped></style>