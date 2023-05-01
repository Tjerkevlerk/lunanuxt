<template>
  <Header></Header>
  <menu></menu>
  <slot />
  <Footer></Footer>
</template>

<script lang="ts">
import Header from '~/components/header.vue';
import menu from '~/components/menu.vue';
import Footer from '~/components/footer.vue';

</script>

<style scoped></style>
