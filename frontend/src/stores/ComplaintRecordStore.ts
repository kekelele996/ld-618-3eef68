import { defineStore } from "pinia";
import { listComplaintRecord } from "../api/ComplaintRecord";
export const useComplaintRecordStore = defineStore("complaintRecord", {
  state: () => ({ rows: [] as Awaited<ReturnType<typeof listComplaintRecord>>, loading: false }),
  actions: { async load() { this.loading = true; this.rows = await listComplaintRecord(); this.loading = false; } }
});
