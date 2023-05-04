<template>
  <div>
    <h1>FAQ</h1>
    <p v-bind="data"></p>
    <ul>
      <li v-for="(faq, index) in data.faqs" :key="index">{{ faq.question }}</li>
    </ul>
  </div>
</template>

<script>
import { reactive, onMounted } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const data = reactive({ faqs: [] });

    onMounted(() => {
      axios.get('http://localhost:1337/api/faqs')
        .then(response => {
          data.faqs = response.data;
        });
    });

    return { data };
  }
}
</script>

<style lang="scss" scoped></style>