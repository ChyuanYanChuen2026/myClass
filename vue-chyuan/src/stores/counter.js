import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useCounterStore = defineStore('counter', () => {
  const count1 = ref(0);
  const doubleCount = computed(() => count1.value * 2);
  function addCount() {
    count1.value++;
  }
  return {
    count1,
    doubleCount,
    addCount,
  };
});
