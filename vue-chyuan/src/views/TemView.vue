<script setup> 
import { ref,computed,watch } from 'vue';

const fTemp=ref(32);
const displayColor=ref('black');
const cTemp=computed(()=>{
  return Number(((fTemp.value-32)*5/9).toFixed(2));
});
watch(cTemp,(newValue,oldValue)=>{
  console.log(newValue,oldValue);
  if(cTemp.value>30){
    displayColor.value='red';
  }else if(cTemp.value<20){
    displayColor.value='blue';
  }else{
    displayColor.value='black';
  }
},{immediate:true});

</script>

<template>
  <input type="number" v-model="fTemp" />
  <p>今日攝氏溫度: <span :style="{ color: displayColor }">{{ cTemp }}°C</span></p>
  <p>華氏溫度: {{fTemp}}°F</p>
</template>

<style scoped>

</style>