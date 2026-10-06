<script setup> 
import { ref ,computed } from 'vue';
import student from '@/data/student.json';

const students = ref(student[0]);

const fnTotalScore =()=>{
  console.log('f');
  return students.value.chinese + students.value.english + students.value.math;
}
const totalScore = computed(()=>{
  console.log('c');
  fnTotalScore(); // 放在這裡會出現兩次 console.log('f')，因為 computed 會監聽 students.value 的變化，當 students.value 改變時，computed 會重新計算 totalScore，並且會呼叫 fnTotalScore()，所以會出現兩次 console.log('f')。
  // return students.value.chinese + students.value.english + students.value.math;
});

</script>

<template>
  <ul>
    <li>姓名<input v-model="students.name" />{{ students.name }}</li>
    <li>國文<input type="number" v-model="students.chinese" />{{ students.chinese }}</li>
    <li>英文<input type="number" v-model="students.english" />{{ students.english }}</li>
    <li>數學<input type="number" v-model="students.math" />{{ students.math }}</li>
    <li>總分{{ fnTotalScore() }}</li>
    <li>總分{{ totalScore }}</li>
  </ul>
</template>

<style scoped>

</style>