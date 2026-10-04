import { defineStore } from "pinia";
import { listNoiseReading } from "../api/NoiseReading";
export const useNoiseReadingStore = defineStore("noiseReading", {
  state: () => ({ rows: [] as Awaited<ReturnType<typeof listNoiseReading>>, loading: false }),
  actions: { async load() { this.loading = true; this.rows = await listNoiseReading(); this.loading = false; } }
});
