<script setup> 
import { ref } from 'vue';
const score=ref(0);
const switchText=ref(true)
const visibleText =ref(true)



</script>

<template>
  <input type="number" v-model="score" placeholder="請輸入分數">
  <p v-if="score >= 60">幾霸分 你真棒</p>
  <p v-else-if="score < 60 && score > 0">再接再厲 加油哦 </p>
  <p v-else>{{score}}分!真是天才</p>
  
  <hr>
  <button @click="switchText =!switchText">切換</button>
  <template v-if="switchText">
    顯示Template 1
  </template>
  <template v-else>
    切換Template 2
  </template>

  <hr>
  <button @click="visibleText=!visibleText">{{visibleText? '隱藏':'顯示'}}</button>
  <p v-show="visibleText">看到文字</p>
</template>

<style scoped>

</style>