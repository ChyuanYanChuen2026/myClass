<script setup> 
import { ref } from 'vue';
const msg=ref(new Date().toLocaleString());
</script>

<template>
  <p v-text="msg"></p>
  <p>{{ msg }}</p>
</template>

<style scoped>

</style>