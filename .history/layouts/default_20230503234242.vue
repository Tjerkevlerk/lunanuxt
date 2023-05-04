<template>
  <headerCo></headerCo>
  <mainMenu></mainMenu>
  <slot />
  <footerCo></footerCo>
</template>

<script lang="ts">
import headerCo from '~/components/header/headerCo.vue';
import mainMenu from '~/components/main-menu.vue';
import footerCo from '~/components/footerCo.vue';
import '~/node_modules/bootstrap/dist/css/bootstrap.css';
import '~/node_modules/bootstrap/dist/css/bootstrap.css';
import '~/node_modules/bootstrap-vue/dist/bootstrap-vue.css';
</script>

<style scoped></style>
