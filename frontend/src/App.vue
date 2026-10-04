<script setup lang="ts">
import { computed, ref } from "vue";
import { routes } from "./router/routes";
import { mockData } from "./mocks/seedData";
import StatusBadge from "./components/common/StatusBadge.vue";
import StatCard from "./components/common/StatCard.vue";
const active = ref<string>(routes[0]?.route ?? "/dashboard");
const current = computed(() => routes.find((route) => route.route === active.value) ?? routes[0]);
const entries = Object.entries(mockData);
</script>

<template>
  <div class="shell">
    <aside>
      <div class="brand">噪声污染监测数据大屏</div>
      <nav>
        <button v-for="route in routes" :key="route.route" :class="{ active: active === route.route }" @click="active = route.route">{{ route.name }}</button>
      </nav>
    </aside>
    <main class="page">
      <section class="page-head"><div><p class="eyebrow">noise-board</p><h1>{{ current?.name }}</h1></div><StatusBadge value="LOCAL_DATA" /></section>
      <section class="metrics"><StatCard label="核心模型" :value="entries.length" /><StatCard label="共享枚举" :value="3" /><StatCard label="本地记录" :value="entries.reduce((s, [, rows]) => s + rows.length, 0)" /></section>
      <section class="workbench"><div class="panel wide"><h2>业务数据</h2><article class="row" v-for="[key, rows] in entries" :key="key"><strong>{{ key }}</strong><span>{{ rows.length }} 条</span><StatusBadge value="READY" /></article></div><div class="panel"><h2>联动检查</h2><p>页面、store、API、构造器、日志模板和枚举常量均按提示词拆分。</p></div></section>
    </main>
  </div>
</template>
