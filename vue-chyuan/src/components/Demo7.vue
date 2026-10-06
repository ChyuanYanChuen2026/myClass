<script setup> 
import { ref } from 'vue';

const text = ref('Hello Vue 3');
const changeText = (event) => {
  text.value = event.target.value;
};
</script>

<template>
  
  <p >{{ text }}</p>
  <input :value="text" @input="changeText" />
  <input v-model="text" /> //雙向綁定使用v-model可以簡化上面兩行的程式碼，因為v-model會自動處理input事件和value綁定。
</template>

<style scoped>

</style>