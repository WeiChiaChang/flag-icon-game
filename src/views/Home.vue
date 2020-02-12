<template>
  <div class="container">
    <img src="../assets/the Earth.png" alt="TW Icon Game" />
    <h1 class="md-display-6">Flag icons of the world</h1>
    <select-game-type />
  </div>
</template>

<script>
import SelectGameType from '@/components/SelectGameType.vue';

export default {
  name: 'App',
  components: {
    SelectGameType,
  },
};
</script>

<style scoped>
.container {
  text-align: center;
  background: #d9f2e7;
}
img {
  display: inline-block;
  max-width: 72%;
  width: 200px;
}
</style>
