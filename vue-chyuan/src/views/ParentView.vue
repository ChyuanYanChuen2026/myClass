<script setup> 
import { ref } from 'vue';
import Child from '@/components/Child.vue';
//

const msg=ref('來自父組件的資料');

function handleChildClick(eventObj){
  console.log('here',eventObj)
}
</script>

<template>

  <Child title="test" :msg="msg" @eventBtnClick1="handleChildClick"></Child>
</template>

<style scoped>

</style>