<script setup>
import { ref } from "vue";
import foodItemData from "@/data/food.json";

const foodItems = ref(foodItemData);
const foodId =defineModel('foodId')
</script>

<template>
  <select v-model="foodId">
    <option v-for="(item, key) in foodItems" :value="item.id" :key="item.id">
      {{ `${item.name} NT$ ${item.price}` }}
    </option>
  </select>
</template>

<style scoped></style>
