<script setup> 
import { ref } from 'vue';

const callMethod = (event) => {
  console.log('Method called!');
  console.log(event);
};

const callfunc = (name, event) => {
  console.log(`Function called with name: ${name}`);
  console.log(event);
};
</script>

<template>
  <button class="btn" @click="callMethod">Call Method</button> 
  <button class="btn" @click="callfunc('method', $event)">Call Function</button>

</template>

<style scoped>
.btn{
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px;
}

</style>