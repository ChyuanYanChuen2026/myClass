<script setup> 
import{ref,reactive} from 'vue';
const count = ref(1);
const btnStyle = reactive({
  color: 'red',
  backgroundColor: 'black',
  margin: '10px',
  border: none
});
function increment() {
  count.value++;
}

const colorList = ['red', 'green', 'blue', 'orange', 'lightpurple'];
function changeColor() {
  const randomIndex = colorList.indexOf(btnStyle.color) ;
  btnStyle.color = colorList[(randomIndex+1) % colorList.length];
}

</script>

<template>
  <p>Count: {{ count }}</p>
  <button @click="increment">Increment</button>
  <button @click="changeColor" :style="btnStyle">Change Color</button>

</template>

<style scoped>

</style>