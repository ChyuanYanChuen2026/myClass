<script setup> 
import { ref } from 'vue';
const props=defineProps(['id']);

</script>

<template>
  <h1>Home View</h1>
    {{ props.id }}
</template>

<style scoped>

</style>