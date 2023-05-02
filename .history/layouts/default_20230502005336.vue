<template>
  <headerCo></headerCo>
  <menuv></menuv>
  <slot />
  <footerv></footerv>
</template>

<script lang="ts">
import headerCo from '~/components/headerCo.vue';
import menuv from '~/components/menuCo.vue';
import footerv from '~/components/footerCo.vue';

</script>

<style scoped></style>
