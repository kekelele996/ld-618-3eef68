<script setup lang="ts">defineProps<{ value: string }>();</script><template><span class="badge">{{ value.replace(/_/g, " ") }}</span></template>
