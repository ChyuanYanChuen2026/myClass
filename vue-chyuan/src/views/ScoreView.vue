<script setup> 
import { ref } from 'vue';
import studentData from '@/data/student.json';
const inputSearch = ref();
const students =ref(studentData)

function searchFilter(){
  // const searchText = inputSearch.value.trim(); 
  if(inputSearch.value){
    students.value = studentData.filter((e)=>{
       return e.name.toUpperCase().includes(inputSearch.value.toUpperCase());
    });
  }else{
    students.value = studentData;
  }
  
};
</script>

<template>
<p>
  <label>名字搜尋</label>
  <input type="search" v-model.trim="inputSearch" @keyup.enter="searchFilter">
</p>
<table class="table">
  <thead>
    <tr>
      <th scope="col">名字</th>
      <th scope="col">國文</th>
      <th scope="col">英文</th>
      <th scope="col">數學</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(items,index) in students" :key="items.id">
      <td>{{ items.name }}</td>
      <td>{{ items.chinese }}</td>
      <td>{{ items.english }}</td>
      <td>{{ items.math }}</td>
    </tr>
  </tbody>
</table>

</template>

<style scoped>

</style>