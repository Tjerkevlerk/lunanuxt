<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
});
</script>

<template>
  <div id="footer">
    <div class="left">
      tripadvisor 1
    </div>
    <div class="address-div">
      <p>Plot 3, Block B, Njedengwa East, <br>Dodoma, Tanzania<br>
        Telephone: <telephone>+31616509325</telephone> | Email: <a
          mailto="info@lunaswildrides.com">info@lunaswildrides.com</a></p>
      <p>
        Copyright ©<span v-bind:year="currentYear">{{ currentYear }}</span> Luna's Wild Rides
      </p>
      <p><router-link to="Privacy">Privacy</router-link> | <router-link to="disclaimer">Disclaimer</router-link></p>
    </div>
    <div class="right">
      tripadvisor2
    </div>
  </div>
</template>

<style scoped lang="scss"></style>