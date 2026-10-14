<script setup> 
import { ref } from 'vue';
import { useCounterStore } from '@/stores/counter';

const counterStore =useCounterStore();



</script>

<template>

StoreCount : {{ counterStore.count1 }} <br>
StoreDoubleCount : {{ counterStore.doubleCount }}<br>
<button @click="counterStore.addCount">click</button>
</template>

<style scoped>

</style>