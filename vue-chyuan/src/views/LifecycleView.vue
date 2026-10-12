<script setup> 
import { ref,onBeforeMount,onMounted,onUnmounted,onUpdated,onBeforeUnmount,onBeforeUpdate } from 'vue';

const test = ref();

console.log('CompositionAPI');

onBeforeMount(()=> console.log('BeforeMount'));
onMounted(()=> console.log('Mounted'));

onBeforeUpdate(()=> console.log('BeforeUpdate'));
onUpdated(()=> console.log('Updated'));

onBeforeUnmount(()=> console.log('BeforeUnmount'));
onUnmounted(()=> console.log('Unmounted'));


</script>

<template>
<input type="text" v-model="test">
</template>

<style scoped>

</style>