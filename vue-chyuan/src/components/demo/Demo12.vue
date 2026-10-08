<script setup>

import { ref } from 'vue';
import SlotButton from '../SlotButton.vue';
const msg = ref('Hi!!');

const isShow1 = ref(true);
const isShow2 = ref(false);

</script>

<template>

  <p v-pre>{{ msg }}</p> //完整呈現資料不做任何響應式

  <button @click="isShow1 = !isShow1">Click1</button>
  <button @click="isShow2 = !isShow2">Click2</button>
  <p>isShow1： {{ isShow1 }}</p>
  <p>isShow2： {{ isShow2 }}</p>

  <p v-memo="[isShow1]">MEMO:{{ isShow2 }}</p> //memo陣列內資料(isShow1)有更動時才去做更新資料isShow2

  <hr>
  <SlotButton>
    <template v-slot:leftIcon>🤟</template>
    這是按鈕
  </SlotButton>

</template>

<style scoped></style>