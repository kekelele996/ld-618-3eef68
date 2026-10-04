import { defineStore } from "pinia";
import { listExceedanceEvent } from "../api/ExceedanceEvent";
export const useExceedanceEventStore = defineStore("exceedanceEvent", {
  state: () => ({ rows: [] as Awaited<ReturnType<typeof listExceedanceEvent>>, loading: false }),
  actions: { async load() { this.loading = true; this.rows = await listExceedanceEvent(); this.loading = false; } }
});
