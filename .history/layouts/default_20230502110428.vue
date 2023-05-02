<template>
  <header></header>
  <mainMenu></mainMenu>
  <slot />
  <footerCo></footerCo>
</template>

<script lang="ts">
import header from '~/components/header/Header.vue';
import mainMenu from '~/components/main-menu.vue';
import footerCo from '~/components/footerCo.vue';
</script>

<style scoped></style>
