import { defineStore } from "pinia";
import { listMonitorStation } from "../api/MonitorStation";
export const useMonitorStationStore = defineStore("monitorStation", {
  state: () => ({ rows: [] as Awaited<ReturnType<typeof listMonitorStation>>, loading: false }),
  actions: { async load() { this.loading = true; this.rows = await listMonitorStation(); this.loading = false; } }
});
