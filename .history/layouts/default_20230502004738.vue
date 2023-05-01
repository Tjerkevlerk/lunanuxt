<template>
  <Header></Header>
  <menu></menu>
  <slot />
  <Footer></Footer>
</template>

<script lang="ts">
import Header from '~/components/headerCo.vue';
import menu from '~/components/menuCo.vue';
import Footer from '~/components/footerCo.vue';

</script>

<style scoped></style>
