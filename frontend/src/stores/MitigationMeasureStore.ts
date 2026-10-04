import { defineStore } from "pinia";
import { listMitigationMeasure } from "../api/MitigationMeasure";
export const useMitigationMeasureStore = defineStore("mitigationMeasure", {
  state: () => ({ rows: [] as Awaited<ReturnType<typeof listMitigationMeasure>>, loading: false }),
  actions: { async load() { this.loading = true; this.rows = await listMitigationMeasure(); this.loading = false; } }
});
