<script setup> 
import { ref ,watch } from 'vue';

const count = ref(0);

watch(count, (newVal, oldVal) => {
  console.log(`count改變值從 ${oldVal} 為 ${newVal}`);
});
</script>

<template>
  <p>Count: {{ count }}</p>
  <button @click="count++">Increment</button>
</template>

<style scoped>

</style>