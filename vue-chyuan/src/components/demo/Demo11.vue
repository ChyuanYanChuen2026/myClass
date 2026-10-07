<script setup> 
import { ref } from 'vue';
import foodItemData from '@/data/food.json';
const foodItems = ref(foodItemData);
const showSelectItemVal=ref(-1);

</script>

<template>
  <select v-model="showSelectItemVal">
    <option value="-1">請選擇</option>
    <option v-for="(items,key) in foodItems"  :value="items.id" :key="items.id">{{ `${items.name} NT$ ${items.price}` }}</option>
  </select>
  {{ showSelectItemVal }}
</template>

<style scoped>

</style>