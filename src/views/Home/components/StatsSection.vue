<template>
  <section class="py-10 md:py-16">
    <div class="container-main">
      <div class="glass grid gap-6 rounded-[2rem] p-8 md:grid-cols-4">
        <div v-for="stat in stats" :key="stat.label" class="text-center">
          <div class="text-4xl font-bold text-white md:text-5xl">{{ stat.value }}</div>
          <div class="mt-2 text-sm text-slate-400">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const stats = [
  { value: '120+', label: '成功上线项目' },
  { value: '98%', label: '客户满意度' },
  { value: '24h', label: '快速响应' },
  { value: '7x24', label: '持续支持' }
]
</script>