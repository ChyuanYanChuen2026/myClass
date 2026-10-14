<script setup>
import { computed, reactive, ref } from "vue";
const props = defineProps(["type"]);
const btnState = reactive({
  btnName: "",
  btnBgClass: "",
  iconClass: "",
});
const buttonDisplay = computed(() => {
  switch (props.type) {
    case "add":
      btnState.btnName = "新增";
      btnState.btnBgClass = "btn btn-primary";
      btnState.iconClass = "bi bi-plus";
      break;
    case "search":
      btnState.btnName = "搜尋";
      btnState.btnBgClass = "btn btn-secondary";
      btnState.iconClass = "bi bi-search";
      break;
    case "check":
      btnState.btnName = "確認";
      btnState.btnBgClass = "btn btn-success";
      btnState.iconClass = "bi bi-check";
      break;
    case "cal":
      btnState.btnName = "計算";
      btnState.btnBgClass = "btn btn-warning btn-sm";
      btnState.iconClass = "bi bi-calculator";
      break;
    default:
      btnState.btnName = "未定義";
      break;
  }
  return btnState;
});


</script>

<template>
  <button :class="buttonDisplay.btnBgClass" :type="props.type">
    <i :class="buttonDisplay.iconClass"></i>
    <slot></slot>
    <span>{{ buttonDisplay.btnName }}</span>
  </button>

</template>

<style scoped></style>
