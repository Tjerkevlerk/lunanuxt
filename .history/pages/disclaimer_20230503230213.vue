<template>
  <div>
    <div v-for="page in pages" :key="page.id">
      <h1>{{ page.Title }}</h1>
      <div v-html="page.Description"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';

const Pages = defineComponent({
  setup() {
    const pages = ref([]);

    // Use onMounted() to wait for the component to mount before fetching the pages

    onMounted(async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/Pages/3');
        pages.value = response.data.data;
      } catch (error) {
        console.log('Error while fetching page:', error);
      }
    });

    return { pages };
  },
});

export default Pages;
</script>

<style scoped></style>