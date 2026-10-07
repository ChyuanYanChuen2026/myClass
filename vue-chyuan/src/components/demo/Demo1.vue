<script setup> 
import { ref } from 'vue';
const msg=ref(new Date().toLocaleString());
const msg2=ref(`<p>這是<strong>Vuejs</strong>第一堂課</p>`);

let time=180;
const getFnValue=()=> `還剩${time}分鐘`;
</script>

<template>
  <p v-text="msg"></p>
  <p v-html="msg2"></p>
  <p>{{ getFnValue() }}</p>
</template>

<style scoped>

</style>