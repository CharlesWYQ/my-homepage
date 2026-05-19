<template>
  <section class="py-20 md:py-28">
    <div class="container-main">
      <div class="text-center">
        <p class="text-sm font-medium uppercase tracking-[0.3em] text-violet-400">Testimonials</p>
        <h2 class="section-title mt-4">用户喜欢这种高级、克制、专业的感觉</h2>
        <p class="section-desc mx-auto">
          好的网站不仅要好看，还要让人信任。真实感、质感和清晰的信息表达非常重要。
        </p>
      </div>

      <div class="mt-14 grid gap-6 md:grid-cols-3">
        <div
            v-for="review in reviews"
            :key="review.name"
            class="glass rounded-3xl p-6"
        >
          <div class="flex items-center gap-1 text-yellow-400">
            <span v-for="n in 5" :key="n">★</span>
          </div>
          <p class="mt-5 text-sm leading-7 text-slate-300">
            “{{ review.content }}”
          </p>

          <div class="mt-6 flex items-center gap-4">
            <div class="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 text-white font-semibold">
              {{ review.initial }}
            </div>
            <div>
              <p class="font-medium text-white">{{ review.name }}</p>
              <p class="text-sm text-slate-400">{{ review.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const reviews = [
  {
    initial: 'L',
    name: 'Lina',
    role: '品牌主理人',
    content: '首页视觉非常高级，第一次看就觉得很有品牌感，适合做产品官网。'
  },
  {
    initial: 'M',
    name: 'Mason',
    role: '前端开发者',
    content: '结构清楚，组件拆分合理，直接拿来改就能快速出一个高质感页面。'
  },
  {
    initial: 'A',
    name: 'Amy',
    role: '增长负责人',
    content: '既有设计感，又有转化逻辑，Hero、数据、CTA 的层次非常舒服。'
  }
]
</script>