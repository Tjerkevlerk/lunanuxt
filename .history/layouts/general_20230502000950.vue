<template>
  <headervue></headervue>
  <navvue></navvue>
  <footervue></footervue>
</template>

<script lang="ts">
import headervue from '~/components/header.vue';
import navvue from '~/components/nav.vue';
import footervue from '~/components/footer.vue';

export default {
  layout: 'general',
  components: {
    headervue,
    navvue,
    footervue,
  }
}
</script>

<style scoped></style>