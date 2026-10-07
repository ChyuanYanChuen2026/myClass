<script setup> 
import { ref } from 'vue';
  const className = ref(false);

</script>

<template>
  
  <button :class="'btn ' + (className ? 'active' : '')">Click me</button>
</template>

<style scoped>
.btn{
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.btn.active{
  background-color: grey;
}

</style>