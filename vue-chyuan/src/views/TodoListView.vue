<script setup> 
import { ref } from 'vue';
const searchInputVal = ref();



</script>

<template>

<h2>待辦清單</h2>
<div class="container">

<input type="search" v-model="searchInputVal"> 
<button class="btn btn-primary">新增</button>

<ul>
  <li>
    <input type="checkbox">
    <label class="form-label">健身</label>
    <button class="btn btn-primary">刪除</button>
  </li>
</ul>

</div>

</template>

<style scoped>

li {
  list-style: none;
}

button {
  height: 28px;
  margin: 0 10px;
  line-height: 28px;
  padding: 0 5px;
  font-size: 12px;
}

</style>