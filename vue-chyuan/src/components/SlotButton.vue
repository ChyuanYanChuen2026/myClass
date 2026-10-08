<script setup> 
import { ref } from 'vue';

</script>

<template>
  <button class="btn">
    <slot name="leftIcon"></slot>
    <slot></slot>
  </button>
</template>

<style scoped>
button{
  border: none;
  background-color: rgb(241, 70, 7);
  color: white;
  border-radius: 5px;
  margin: 5px;
}
</style>