<script setup> 
import { ref ,reactive} from 'vue';
import {AbilityPoint} from '@/common/ability-point.js';

const apRef = ref(AbilityPoint.generateRandom());
const changeApRef= () => {
  apRef.value = AbilityPoint.generateRandom();
};

const apReactive = reactive(AbilityPoint.generateRandom());
const changeApReactive = () => {
  const newAp = AbilityPoint.generateRandom();
  apReactive.str = newAp.str;
  apReactive.dex = newAp.dex;
  apReactive.int = newAp.int;
  apReactive.luk = newAp.luk;
};



</script>

<template>
<ul>
  <li>⼒量：{{ apRef.str }}</li>
  <li>敏捷：{{ apRef.dex }}</li>
  <li>智力：{{ apRef.int }}</li>
  <li>幸運：{{ apRef.luk}}</li>
</ul>
<button @click="changeApRef">刷新屬性</button>

<ul>
  <li>⼒量：{{ apReactive.str }}</li>
  <li>敏捷：{{ apReactive.dex }}</li>
  <li>智力：{{ apReactive.int }}</li>
  <li>幸運：{{ apReactive.luk}}</li>
</ul>
<button @click="changeApReactive">刷新屬性</button>
</template>

<style scoped>

</style>