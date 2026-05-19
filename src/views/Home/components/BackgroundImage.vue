<!-- src/components/BackgroundImage.vue -->
<template>
  <div class="fixed inset-0 z-0 transition-opacity duration-1000 ease-in-out" :style="{ opacity: isVisible ? 1 : 0 }">
    <!-- 背景图片 -->
    <img 
      v-if="src"
      :src="src" 
      :alt="alt" 
      class="w-screen h-screen object-cover"
    />
    
    <!-- 渐变遮罩层 -->
    <div class="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/50"></div>
    
    <!-- 科技感网格 overlay -->
    <div class="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  src: {
    type: String,
    default: ''
  },
  alt: {
    type: String,
    default: '背景图片'
  }
})

const isVisible = ref(false)

onMounted(() => {
  // 延迟显示以实现渐变效果
  setTimeout(() => {
    isVisible.value = true
  }, 50)
})
</script>
