<template>
  <v-app>
    <v-container>
      <headerCo></headerCo>
      <mainMenu></mainMenu>
      <slot />
      <footerCo></footerCo>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import headerCo from '~/components/header/headerCo.vue';
import mainMenu from '~/components/main-menu.vue';
import footerCo from '~/components/footerCo.vue';
</script>

<style scoped></style>
