import { ref, computed } from 'vue';
export function useSearch(sourceData, field) {
  const keyword = ref('');
  const result = computed(() => {
    if (keyword.value) {
      return (sourceData.value = sourceData.filter((e) => {
        return e[field].toUpperCase().includes(keyword.value.toUpperCase());
      }));
    } else {
      sourceData.value = sourceData;
    }
  });
  return { keyword, result };
}
