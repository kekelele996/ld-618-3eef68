import { computed, ref } from "vue";
export function useNoiseAggregation<T>(rows: T[] = []) {
  const page = ref(1);
  const pageSize = 8;
  const pageRows = computed(() => rows.slice((page.value - 1) * pageSize, page.value * pageSize));
  return { page, pageSize, pageRows, total: rows.length };
}
