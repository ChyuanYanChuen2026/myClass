<script setup> 
import { ref } from 'vue';

const isShow=ref(true);
</script>

<template>
  
  <Transition>
    <h1 class="blue" v-show="isShow">Hello Vue</h1>
  </Transition>
  <button @click="isShow=!isShow">Switch</button>

</template>

<style scoped>
.blue{
  transform: scale(1);
  color:blue;
}
.v-enter-from{
  transform: scale(0.5);
  color:cadetblue;
  opacity: 0.5;
}
.v-enter-to{
  transform: scale(1.5);
  color: orange;
  opacity: 1;
}

.v-enter-active{
  transition:  all 5s linear;
}

</style>