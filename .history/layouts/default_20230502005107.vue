<template>
  <headerv></headerv>
  <menuv></menuv>
  <slot />
  <footerv></footerv>
</template>

<script lang="ts">
import headerv from '~/components/headerCo.vue';
import menuv from '~/components/menuCo.vue';
import footerv from '~/components/footerCo.vue';

</script>

<style scoped></style>
