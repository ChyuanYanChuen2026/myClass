<script setup> 
import { ref } from 'vue';
import foodItemData from '@/data/food.json';
import studentData from '@/data/student.json';
const foodItems = ref(foodItemData);
const students =ref(studentData[0]);
const showSelectItemVal=ref(-1);
const userInsertOptionVal=ref();

function addValue(){
  foodItems.value.push({
    id:(foodItems.value.length+1),
    name:userInsertOptionVal.value
  })
}
</script>

<template>
  <select v-model="showSelectItemVal">
    <option value="-1">請選擇</option>
    <option v-for="(items,key) in foodItems"  :value="items.id" :key="items.id">{{ `${items.name} NT$ ${items.price}` }}</option>
  </select>
  {{ showSelectItemVal }}

  <hr>
  <p>新增選單</p>
  <input type="text" v-model="userInsertOptionVal">
  <p>{{ userInsertOptionVal }}</p>
  <button @click="addValue">新增選單</button>

  <hr>
  <ul>
    <li v-for="(itemsS,key) in students">{{ key }}:{{ itemsS }}</li>
  </ul>
</template>

<style scoped>

</style>