<template>
  <section class="py-20 md:py-28">
    <div class="container-main">
      <div class="text-center">
        <p class="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">Features</p>
        <h2 class="section-title mt-4">为高端网站而生的核心能力</h2>
        <p class="section-desc mx-auto">
          这套首页结构适合展示产品价值、增强品牌感、提升转化率。视觉上更高级，结构上更清晰。
        </p>
      </div>

      <div class="mt-14 grid gap-6 md:grid-cols-3">
        <div
            v-for="item in features"
            :key="item.title"
            class="glass group rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/8"
        >
          <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-cyan-400/20 text-2xl">
            {{ item.icon }}
          </div>
          <h3 class="mt-5 text-xl font-semibold text-white">{{ item.title }}</h3>
          <p class="mt-3 text-sm leading-7 text-slate-300">
            {{ item.desc }}
          </p>
          <div class="mt-6 text-sm font-medium text-cyan-300 transition group-hover:text-cyan-200">
            了解更多 →
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    icon: '⚡',
    title: '快速搭建',
    desc: '基于 Vue 3 + Vite + Tailwind，开发效率高，适合快速上线高质量首页。'
  },
  {
    icon: '✨',
    title: '高级视觉',
    desc: '通过渐变、光效、玻璃拟态和层次布局，营造强烈的现代高级感。'
  },
  {
    icon: '📱',
    title: '完美响应式',
    desc: '从桌面到手机都能保持漂亮的排版和间距，不会出现拥挤或错位。'
  }
]
</script>