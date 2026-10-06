<script setup> 
import { ref } from 'vue';
const display = ref(false);
const height = ref('');
const weight = ref('');
const bmi = ref('');
const calculateBMI = () => {
  const h = parseFloat(height.value);
  const w = parseFloat(weight.value);
  if (isNaN(h) || isNaN(w) || h <= 0 || w <= 0) {
    bmi.value = '請輸入有效的身高和體重';
    display.value = false;
    return;
  }
  const bmiValue = w / ((h / 100) ** 2); // 將身高從公分轉換為公尺 也可使用Math.pow(h / 100, 2)
  bmi.value = bmiValue.toFixed(2);
  display.value = true;
};

</script>

<template>
  <div>
  <label>身高(cm): <input type="text" v-model="height" /></label>
  </div>
  <div>
  <label>體重(kg): <input type="text" v-model="weight" /></label>
  </div>
  <br>
  <button @click="calculateBMI">計算BMI</button>
  <!--  可以使用hidden屬性 -->
  <!-- <p :class="{ hide: !display, show: display }">BMI: {{ bmi }}</p> -->
  <p :hidden="!display">BMI: {{ bmi }}</p>
</template>

<style scoped>
.hide {
  display: none;
}
.show {
  display: block;
}
</style>