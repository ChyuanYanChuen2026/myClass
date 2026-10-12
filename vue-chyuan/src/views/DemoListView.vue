<script setup> 
import {ref ,onBeforeMount,onMounted} from 'vue';
import Demo from '@/components/demo/Demo.vue';
import Demo1 from '@/components/demo/Demo1.vue';
import Demo2 from '@/components/demo/Demo2.vue';
import Demo3 from '@/components/demo/Demo3.vue';
import Demo4 from '@/components/demo/Demo4.vue';
import Demo5 from '@/components/demo/Demo5.vue';
import Demo6 from '@/components/demo/Demo6.vue';
import Demo7 from '@/components/demo/Demo7.vue';
import Demo8 from '@/components/demo/Demo8.vue';
import Demo9 from '@/components/demo/Demo9.vue';
import Demo10 from '@/components/demo/Demo10.vue';
import Demo11 from '@/components/demo/Demo11.vue';
import Demo12 from '@/components/demo/Demo12.vue';
import Demo13 from '@/components/demo/Demo13.vue';
import Demo14 from '@/components/demo/Demo14.vue';
import Demo15 from '@/components/demo/Demo15.vue';

const DomeList = [Demo,Demo1,Demo2,Demo3,Demo4,Demo5,Demo6,Demo7,Demo8,Demo9,Demo10,Demo11,Demo12,Demo13,Demo14,Demo15]
const selectIndex = ref(15);
onBeforeMount(()=>{
  console.log('BeforeMount');
});
onMounted(()=>{
  console.log('Mount');
});

</script>

<template>
  <!-- <Demo10 /> -->
  <!-- <Demo11 /> -->
  <!-- <Demo12 /> -->
  <select v-model="selectIndex">
    <option v-for="(item,index) in DomeList" :value="index">{{ item.__name }}</option>
  </select>
  <hr>
  <KeepAlive>
    <component :is="DomeList[selectIndex]"></component>
  </KeepAlive>
</template>

<style scoped>

</style>