<template>
  <section class="relative h-screen flex items-center justify-center overflow-hidden">
    <!-- 内容区域 -->
    <div class="container-main relative z-10 grid md:grid-cols-2 gap-12 items-center">
      <!-- 左侧文案 -->
      <div>
        <!-- 标签 -->
        <div
            class="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400 backdrop-blur mb-6">
          <span class="inline-block h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
          创新 · 智能 · 高效
        </div>

        <!-- 主标题 -->
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white mb-6">
          打造未来
          <br/>
          <span class="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
            数字化解决方案
          </span>
        </h1>

        <!-- 描述文字 -->
        <p class="text-lg md:text-xl leading-relaxed text-slate-300 mb-8 max-w-xl">
          融合前沿技术与创新思维，为企业提供全方位的数字化转型服务，
          助力业务增长，创造卓越价值。
        </p>

        <!-- 核心指标 -->
        <div class="grid grid-cols-3 gap-6 mb-10">
          <div class="glass rounded-xl p-4 text-center">
            <div class="text-3xl md:text-4xl font-bold text-cyan-400 mb-1">500+</div>
            <div class="text-xs text-slate-400">成功案例</div>
          </div>
          <div class="glass rounded-xl p-4 text-center">
            <div class="text-3xl md:text-4xl font-bold text-blue-400 mb-1">99%</div>
            <div class="text-xs text-slate-400">客户满意度</div>
          </div>
          <div class="glass rounded-xl p-4 text-center">
            <div class="text-3xl md:text-4xl font-bold text-violet-400 mb-1">24/7</div>
            <div class="text-xs text-slate-400">技术支持</div>
          </div>
        </div>

        <!-- 按钮组 -->
        <div class="flex flex-wrap gap-4">
          <button
              class="group relative overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/40">
            <span class="relative z-10">开始探索</span>
            <div
                class="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 transition-opacity group-hover:opacity-100"></div>
          </button>
          <button
              class="rounded-full border-2 border-white/20 bg-white/5 px-8 py-4 text-base font-medium text-white backdrop-blur transition-all hover:bg-white/10 hover:border-white/30 hover:scale-105">
            了解更多
          </button>
        </div>

        <!-- 底部特性标签 -->
        <div class="mt-10 flex flex-wrap gap-4 text-sm text-slate-400">
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            专业技术
          </div>
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            定制服务
          </div>
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            持续创新
          </div>
        </div>
      </div>

      <!-- 右侧：系统预览图或装饰 -->
      <div class="hidden md:block relative">
        <div class="glass rounded-2xl p-6 shadow-2xl">
          <!-- 模拟系统界面 -->
          <div class="rounded-xl border border-white/10 bg-slate-950/80 p-6">
            <!-- 顶部栏 -->
            <div class="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
              <div class="flex items-center gap-3">
                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span class="text-sm text-slate-400">Dashboard Overview</span>
            </div>

            <!-- 数据卡片 -->
            <div class="grid grid-cols-2 gap-4 mb-6">
              <div class="rounded-lg border border-cyan-500/20 bg-cyan-500/5 p-4">
                <div class="text-xs text-slate-400 mb-2">活跃用户</div>
                <div class="text-2xl font-bold text-white">12.5K</div>
                <div class="text-xs text-emerald-400 mt-1">↑ 18.2%</div>
              </div>
              <div class="rounded-lg border border-blue-500/20 bg-blue-500/5 p-4">
                <div class="text-xs text-slate-400 mb-2">项目总数</div>
                <div class="text-2xl font-bold text-white">328</div>
                <div class="text-xs text-emerald-400 mt-1">↑ 15.7%</div>
              </div>
            </div>

            <!-- 图表占位 -->
            <div class="rounded-lg border border-white/10 bg-white/5 p-4 mb-4">
              <div class="text-sm text-slate-400 mb-3">增长趋势</div>
              <div class="flex items-end gap-2 h-24">
                <div class="flex-1 bg-gradient-to-t from-cyan-500 to-cyan-400 rounded-t" style="height: 45%"></div>
                <div class="flex-1 bg-gradient-to-t from-cyan-500 to-cyan-400 rounded-t" style="height: 60%"></div>
                <div class="flex-1 bg-gradient-to-t from-cyan-500 to-cyan-400 rounded-t" style="height: 55%"></div>
                <div class="flex-1 bg-gradient-to-t from-cyan-500 to-cyan-400 rounded-t" style="height: 75%"></div>
                <div class="flex-1 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t" style="height: 85%"></div>
                <div class="flex-1 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t" style="height: 95%"></div>
              </div>
            </div>

            <!-- 进度条 -->
            <div class="rounded-lg border border-white/10 bg-white/5 p-4">
              <div class="flex items-center justify-between mb-3">
                <span class="text-sm text-slate-300">目标完成度</span>
                <span class="text-sm font-semibold text-cyan-400">92.3%</span>
              </div>
              <div class="h-2 bg-white/10 rounded-full overflow-hidden">
                <div class="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" style="width: 92.3%"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- 浮动元素 -->
        <div class="absolute -top-4 -right-4 glass rounded-xl p-4 shadow-xl animate-float-slow">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
              <svg class="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
              </svg>
            </div>
            <div>
              <div class="text-xs text-slate-400">业绩增长</div>
              <div class="text-lg font-bold text-white">+45.2%</div>
            </div>
          </div>
        </div>

        <div class="absolute -bottom-4 -left-4 glass rounded-xl p-4 shadow-xl animate-float-medium">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center">
              <svg class="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <div>
              <div class="text-xs text-slate-400">稳定运行</div>
              <div class="text-lg font-bold text-white">99.9%</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 滚动提示 -->
    <div
        class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 animate-bounce">
      <span class="text-xs">向下滚动</span>
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </svg>
    </div>
  </section>
</template>
