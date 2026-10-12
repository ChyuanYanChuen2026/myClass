<script setup>

const divClick = () => alert('Div被點擊');
const btnClick = () => alert('按鈕被點擊');

</script>

<template>

  <div @click="divClick" style="background-color: darkgreen;">
    <button @click.stop="btnClick">點我</button>
  </div>
  <hr>
  <div @click.self="divClick" style="background-color: darkgreen;">
    <button @click.middle="btnClick">滑鼠滾輪點我</button>
  </div>
  <hr>
  <button @click.ctrl="btnClick">ctrl</button>
  <button @click.ctrl.alt="btnClick">ctrl+alt</button>
  <button @click.ctrl.exact="btnClick">only ctrl</button>

</template>

<style scoped></style>