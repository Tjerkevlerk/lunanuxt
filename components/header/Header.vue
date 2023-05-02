<script lang="ts" setup>
import Logo from './Logo.vue';
import LangSwitch from './LangSwitch.vue';
import Social from './Social.vue';
import contact from './contact.vue';


</script>
<template>
  <div id="header">
    <div id="left-header">
      <Logo />
    </div>
    <div id="right-header">
      <contact />
      <Social />
      <LangSwitch />
    </div>
  </div>
</template>

<style lang="scss" scoped>
#right-header {
  display: flex;
}
</style>