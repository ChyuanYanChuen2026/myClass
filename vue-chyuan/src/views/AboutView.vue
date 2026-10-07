<script setup> 
import { ref } from 'vue';

</script>

<template>
  <h1>About View</h1>
  <RouterLink :to="{name:'Content1'}">Content1 Page</RouterLink> | 
  <RouterLink :to="{name:'Content2'}">Content2 Page</RouterLink>

  <RouterView/>
</template>

<style scoped>

</style>