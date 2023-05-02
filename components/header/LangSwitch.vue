<template>
  <div id="language-switch" class="flex align-items-center justify-content-center w-4rem h-4rem font-bold text-white border-round
    m-2">
    <button class="language-button" @click="switchLanguage('en')"></button>
    <button class="language-button" @click="switchLanguage('nl')"></button>
  </div>
</template>

<script lang="ts">
</script>

<style scoped lang="scss">
.language-button {
  width: 30px;
  height: 20px;
  margin-right: 0.75em;
  background-repeat: no-repeat;
  background-position: center;
  background-color: none;
  border: 0;
  cursor: pointer;
  border-radius: 0;
  transition: none;
}

.language-button:nth-of-type(1) {
  background-image: url('../../assets/images/us-flag-20.png');
  height: 20px
}

.language-button:nth-of-type(2) {
  background-image: url('../../assets/images/nl-flag-20.png');
  height: 20px;
}
</style>