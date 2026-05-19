<template>
  <div class="relative h-screen overflow-hidden text-white">
    <!-- 背景层容器 - 固定定位 -->
    <div class="fixed inset-0 z-0">
      <!-- 前一个背景（正在淡出） -->
      <transition name="fade-background">
        <component
          v-if="prevBackground && isTransitioning"
          :is="prevBackground"
          key="prev"
          class="absolute inset-0"
        />
      </transition>

      <!-- 当前背景（正在淡入） -->
      <transition name="fade-background">
        <component
          :is="currentBackground"
          :key="currentSection"
          class="absolute inset-0"
        />
      </transition>
    </div>

    <!-- 固定顶部导航 -->
    <div class="fixed top-0 left-0 right-0 z-50">
      <SiteHeader />
    </div>

    <!-- 滚动容器 -->
    <div
      ref="scrollContainer"
      class="h-full overflow-y-auto snap-y snap-mandatory relative z-10"
      @wheel.prevent="handleWheel"
      @scroll="handleScroll"
    >
      <!-- 第1屏: Hero -->
      <section class="snap-start snap-always min-h-screen flex items-center justify-center py-8" data-section="0">
        <div class="w-full">
          <HeroSection />
        </div>
      </section>

      <!-- 第2屏: Features -->
      <section class="snap-start snap-always min-h-screen flex items-center justify-center py-8" data-section="1">
        <div class="w-full">
          <FeatureSection />
        </div>
      </section>

      <!-- 第3屏: Stats -->
      <section class="snap-start snap-always min-h-screen flex items-center justify-center py-8" data-section="2">
        <div class="w-full">
          <StatsSection />
        </div>
      </section>

      <!-- 第4屏: Testimonials -->
      <section class="snap-start snap-always min-h-screen flex items-center justify-center py-8" data-section="3">
        <div class="w-full">
          <TestimonialSection />
        </div>
      </section>

      <!-- 第5屏: CTA -->
      <section class="snap-start snap-always min-h-screen flex items-center justify-center py-8" data-section="4">
        <div class="w-full">
          <CtaSection />
        </div>
      </section>

      <!-- 底部导航页 -->
      <section class="snap-start snap-always min-h-screen flex flex-col justify-end" data-section="5">
        <div class="w-full h-full flex flex-col">
          <CtaSection />
          <SiteFooter />
        </div>
      </section>
    </div>

    <!-- 页面指示器 -->
    <div class="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3">
      <button
        v-for="(dot, index) in totalSections"
        :key="index"
        @click="scrollToSection(index)"
        :class="[
          'w-2.5 h-2.5 rounded-full transition-all duration-300',
          currentSection === index
            ? 'bg-cyan-400 scale-125 shadow-lg shadow-cyan-500/50'
            : 'bg-white/20 hover:bg-white/40'
        ]"
        :aria-label="`跳转到第 ${index + 1} 屏`"
      ></button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, markRaw, h, watch } from 'vue'
import SiteHeader from '../../components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import FeatureSection from './components/FeatureSection.vue'
import StatsSection from './components/StatsSection.vue'
import TestimonialSection from './components/TestimonialSection.vue'
import CtaSection from './components/CtaSection.vue'
import SiteFooter from '../../components/SiteFooter.vue'
import BackgroundImage from './components/BackgroundImage.vue'
import DefaultBackground from './components/DefaultBackground.vue'

const currentSection = ref(0)
const prevSection = ref(null)
const scrollContainer = ref(null)
let isAnimating = false
let wheelTimeout = null
const isTransitioning = ref(false)

// 背景配置
const backgroundConfig = [
  { type: 'image', src: '/img/background-1.png', alt: '军事训练背景1' },
  { type: 'image', src: '/img/background-2.jpg', alt: '军事训练背景2' },
  { type: 'default' },
  { type: 'default' },
  { type: 'default' },
  { type: 'image', src: '/img/background-1.png', alt: '军事训练背景0'  },
]
const totalSections = backgroundConfig.length

// 创建背景组件的辅助函数
const createBackgroundComponent = (config) => {
  if (!config || config.type === 'default') {
    return markRaw(DefaultBackground)
  }

  return {
    render() {
      return h(BackgroundImage, {
        src: config.src,
        alt: config.alt
      })
    }
  }
}

// 当前背景组件
const currentBackground = computed(() => {
  return createBackgroundComponent(backgroundConfig[currentSection.value])
})

// 前一个背景组件
const prevBackground = computed(() => {
  if (prevSection.value === null) return null
  return createBackgroundComponent(backgroundConfig[prevSection.value])
})

// 监听页面变化，触发过渡
watch(currentSection, (newVal, oldVal) => {
  if (oldVal !== null && newVal !== oldVal) {
    prevSection.value = oldVal
    isTransitioning.value = true

    // 过渡完成后清除前一个背景
    setTimeout(() => {
      isTransitioning.value = false
      prevSection.value = null
    }, 1000) // 与 CSS 过渡时间一致
  }
})

const scrollToSection = (index) => {
  if (!scrollContainer.value || isAnimating) return
  if (index < 0 || index >= totalSections) return

  isAnimating = true
  const sections = scrollContainer.value.querySelectorAll('.snap-start')
  if (sections[index]) {
    sections[index].scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })

    setTimeout(() => {
      isAnimating = false
    }, 800)
  }
}

const handleWheel = (e) => {
  if (isAnimating) return

  if (wheelTimeout) {
    clearTimeout(wheelTimeout)
  }

  wheelTimeout = setTimeout(() => {
    if (e.deltaY > 0) {
      if (currentSection.value < totalSections - 1) {
        scrollToSection(currentSection.value + 1)
      }
    } else {
      if (currentSection.value > 0) {
        scrollToSection(currentSection.value - 1)
      }
    }
  }, 50)
}

const handleScroll = () => {
  if (!scrollContainer.value) return

  requestAnimationFrame(() => {
    const sections = scrollContainer.value.querySelectorAll('.snap-start')
    const scrollTop = scrollContainer.value.scrollTop
    const viewportHeight = scrollContainer.value.clientHeight

    let closestIndex = 0
    let minDistance = Infinity

    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop
      const sectionCenter = sectionTop + section.offsetHeight / 2
      const viewportCenter = scrollTop + viewportHeight / 2
      const distance = Math.abs(viewportCenter - sectionCenter)

      if (distance < minDistance) {
        minDistance = distance
        closestIndex = index
      }
    })

    // 只有当页面真正改变时才更新
    if (closestIndex !== currentSection.value) {
      currentSection.value = closestIndex
    }
  })
}

onMounted(() => {
  handleScroll()
})
</script>