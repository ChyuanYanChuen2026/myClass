<script setup> 
import { ref,nextTick } from 'vue';
const count = ref(0);
function increment() {
  count.value++;

  nextTick(() => { // 等待 DOM 更新完成後執行
    console.log(1,document.querySelector('#p').textContent);
  });
    console.log(2,document.querySelector('#p').textContent);
}

</script>

<template>
<p id="p">{{ count }}</p>
<button @click="increment">+1</button>
</template>

<style scoped>

</style>