<script setup> 
import { useToggle } from '@/composables/useToggle';


// const obj = { 'name': "derek", 'age': 35 };
// const name = obj.name;
// const age = obj.age;
// const { name, age } = obj;


const { state, toggle } = useToggle();

</script>

<template>

    <button @click="toggle">{{ state }}</button>
</template>

<style scoped>

</style>