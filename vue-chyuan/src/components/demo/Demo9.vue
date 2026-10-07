<script setup> 
import { ref ,watch, watchEffect } from 'vue';
import Member from '@/data/member.json';

const count = ref(0); //監聽屬性為基本型別
const member = ref(Member[0]); //監聽屬性為物件(參考)型別

watch(count, (newVal, oldVal) => {
  console.log(`count改變值從 ${oldVal} 為 ${newVal}`);
});

function changeAge() {
  member.value.age++; 
}

function changeMember() {
  const index = Math.floor(Math.random() * 10);
  member.value = Member[index];
}

/**
 * 改變物件屬性值,若需要監聽改變要使用Deep:true,
 * deep：是否深層監聽物件裡的變化，預設為false。
 * immediate：是否立刻執行一次 callback，預設為false。
 * flush：執行時機「pre」、「post」、「sync」，預設「pre」。
 * once：是否一次性偵聽器，預設為false。
 */
watch(member, (newVal, oldVal) => {
  if(oldVal === undefined) return; //第一次執行時,舊值為undefined,所以要先排除
  console.log(`member改變值從 ${oldVal.name} 為 ${newVal.name}`);
  console.log(`member改變值從 ${oldVal} 為 ${newVal}`);
},{ deep: true , immediate: true, flush: 'post' });

/**
 *  使用watch(()=>member.value.age, (newVal, oldVal) => {
 *  console.log(`count改變值從 ${oldVal} 為 ${newVal}`);});
 *  單純監聽物件值需要使用函式
 */
  watch(()=>member.value.age, (newVal, oldVal) => {
    //監聽時機為pre,所以Dom還沒render,所以會是舊值
    console.log(document.querySelector('#age').textContent); 
    console.log(`count改變值從 ${oldVal} 為 ${newVal}`);
  });

  watch(member, (newVal, oldVal) => {
    console.log(`member改變值從 ${oldVal.name} 為 ${newVal.name}`);
  });

/**
 * watchEffect
 * 無法取得新舊值,但可以監聽多個屬性,且會立即執行一次
 * 但須注意建立js時會自行先執行一次(Dom render前就先跑一次,所以會有undefined或噴錯的情況)
 */
  const wfExampleName = ref('Amy');
  const wfExampleAge = ref(18);
  watchEffect(() => {
    console.log(`watchEffect: ${wfExampleName.value} , ${wfExampleAge.value}`);
  });


</script>

<template>
  <p>Count: {{ count }}</p>
  <button @click="count++">Increment</button>

  <p id="age">MemberName: {{ member.name }} , Age: {{ member.age }}</p>
  <button @click="changeAge">Change Age</button>
  <button @click="changeMember">Change Member</button> 

  <hr>
  <p>watchEffect: {{ wfExampleName }} , {{ wfExampleAge }}</p>
  <p>請輸入姓名與年齡</p> 
 <input v-model="wfExampleName" type="text" />
 <input v-model="wfExampleAge" type="number" />
</template>

<style scoped>

</style>