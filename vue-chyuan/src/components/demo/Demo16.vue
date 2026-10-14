<script setup> 
import { ref } from 'vue';
import ProjBtn  from '../ProjBtn.vue';
import FoodSelect  from '../FoodSelect.vue';

// const text= ref('check');
const text = defineModel();
function test (event){
  console.log('clickbutton');
  console.log(event);
};
const foodId=ref(7);


</script>


<template>

<input type="text" v-model="text">
<ProjBtn :type="text" @click="test()"></ProjBtn>
{{ foodId }}<FoodSelect v-model="foodId"></FoodSelect>


</template>

<style scoped>

</style>