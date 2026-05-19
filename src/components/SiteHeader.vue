<script setup>
import {ref, onMounted, onUnmounted} from 'vue'
import {useRouter} from 'vue-router'

const router = useRouter()
const isScrolled = ref(false)
const mobileMenuOpen = ref(false)
const activeDropdown = ref(null)

// 监听滚动事件
const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

// 导航跳转函数
const navigateTo = (path) => {
  if (path && path !== '#') {
    router.push(path)
    closeDropdown()
    mobileMenuOpen.value = false
  }
}

// 下拉菜单数据
const navItems = [
  {
    label: '首页',
    path: '/index',
    hasDropdown: false
  },
  {
    label: '功能',
    path: '#',
    hasDropdown: true,
    dropdown: {
      title: '核心功能',
      description: '探索我们的强大功能',
      items: [
        {title: '快速部署', desc: '一键部署，秒级上线', link: '/home'},
        {title: '视觉设计', desc: '现代化UI组件库', link: '#'},
        {title: '安全防护', desc: '企业级安全保障', link: '#'},
        {title: '数据分析', desc: '实时数据监控面板', link: '#'},
        {title: '性能优化', desc: '极致流畅的用户体验', link: '#'},
        {title: '多端适配', desc: '全平台完美兼容', link: '#'}
      ]
    }
  },
  {
    label: '案例',
    path: '/projects',
    hasDropdown: true,
    dropdown: {
      title: '成功案例',
      description: '查看客户的真实反馈',
      items: [
        {title: '企业应用', desc: '大型企业数字化转型', link: '#'},
        {title: '电商平台', desc: '高并发电商解决方案', link: '#'},
        {title: '移动应用', desc: '跨平台移动应用开发', link: '#'},
        {title: '互动娱乐', desc: '游戏化体验设计', link: '#'},
        {title: '金融服务', desc: '安全可靠的金融系统', link: '#'},
        {title: '教育培训', desc: '智能化在线教育平台', link: '#'}
      ]
    }
  },
  {
    label: '关于',
    path: '/about',
    hasDropdown: false
  },
  {
    label: '联系',
    path: '/contact',
    hasDropdown: false
  }
]

const toggleDropdown = (index) => {
  if (activeDropdown.value === index) {
    activeDropdown.value = null
  } else {
    activeDropdown.value = index
  }
}

const closeDropdown = () => {
  activeDropdown.value = null
}
</script>

<template>
  <header
      :class="[
      'sticky top-0 z-50 transition-all duration-500',
      isScrolled
        ? 'border-b border-cyan-500/20 shadow-xl shadow-cyan-500/20'
        : 'border-b border-transparent'
    ]"
  >
    <!-- Gradient background layer -->
    <div
      v-if="isScrolled"
      class="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-950/85 backdrop-blur-[20px]"
    ></div>
    <div
      v-else
      class="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950/30 backdrop-blur-[10px]"
    ></div>

    <div class="container-main relative flex h-18 items-center justify-between py-4">
      <!-- Logo -->
      <div class="flex items-center gap-3 cursor-pointer" @click="navigateTo('/index')">
        <div
            class="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400 shadow-glow transition-transform hover:scale-110">
          <span class="text-lg font-bold text-white">A</span>
        </div>
        <div>
          <p class="text-xs text-slate-400 uppercase tracking-wider">Premium Studio</p>
          <h1 class="text-base font-semibold tracking-wide text-white">Aurora</h1>
        </div>
      </div>

      <!-- Desktop Navigation -->
      <nav class="hidden items-center gap-1 md:flex">
        <div
            v-for="(item, index) in navItems"
            :key="index"
            class="relative"
            @mouseenter="item.hasDropdown && toggleDropdown(index)"
            @mouseleave="item.hasDropdown && closeDropdown()"
        >
          <a
              :href="item.path"
              @click.prevent="!item.hasDropdown && navigateTo(item.path)"
              class="flex items-center gap-1.5 rounded-full px-4 py-2 text-sm text-slate-300 transition-all hover:text-white hover:bg-white/5"
              :class="{ 'text-white bg-white/5': activeDropdown === index }"
          >
            {{ item.label }}
            <svg
                v-if="item.hasDropdown"
                class="w-4 h-4 transition-transform duration-300"
                :class="{ 'rotate-180': activeDropdown === index }"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </a>

          <!-- Simplified Dropdown Menu -->
          <transition
              enter-active-class="transition-all duration-200 ease-out"
              enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition-all duration-150 ease-in"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-1"
          >
            <div
                v-if="item.hasDropdown && activeDropdown === index"
                class="absolute top-full left-0 mt-2 w-72 rounded-xl border border-white/10 bg-slate-900 shadow-xl overflow-hidden"
            >
              <!-- Dropdown Header -->
              <div class="px-5 py-3 border-b border-white/5">
                <h3 class="text-xs font-semibold text-slate-300 uppercase tracking-wider">{{ item.dropdown.title }}</h3>
              </div>

              <!-- Dropdown Items -->
              <div class="py-2">
                <a
                    v-for="(dropdownItem, idx) in item.dropdown.items"
                    :key="idx"
                    :href="dropdownItem.link"
                    @click.prevent="navigateTo(dropdownItem.link)"
                    class="block px-5 py-2.5 transition-colors duration-200 hover:bg-white/5 group/item"
                >
                  <h4 class="text-sm text-slate-200 group-hover/item:text-white transition-colors duration-200">
                    {{ dropdownItem.title }}
                  </h4>
                  <p class="text-xs text-slate-500 mt-0.5 group-hover/item:text-slate-400 transition-colors duration-200">
                    {{ dropdownItem.desc }}
                  </p>
                </a>
              </div>

              <!-- Dropdown Footer -->
              <div class="px-5 py-2.5 border-t border-white/5">
                <a
                    href="#"
                    @click.prevent="navigateTo('/projects')"
                    class="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors group"
                >
                  查看全部
                  <svg class="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 duration-200" fill="none"
                       stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </transition>
        </div>
      </nav>

      <!-- Action Buttons -->
      <div class="flex items-center gap-3">
        <button
            class="hidden relative rounded-full border border-white/10 px-5 py-2 text-sm text-slate-200 transition-all duration-300 hover:border-cyan-500/30 hover:bg-cyan-500/5 hover:text-cyan-300 hover:scale-105 overflow-hidden group md:block"
        >
          <!-- 按钮光效 -->
          <div class="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          <span class="relative">机构登录</span>
        </button>
        <button
            class="group relative overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2.5 text-sm font-medium text-white shadow-lg shadow-cyan-500/25 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/40"
        >
          <!-- 渐变动画 -->
          <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <!-- 光泽效果 -->
          <div class="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>

          <span class="relative z-10">个人登录</span>
        </button>
      </div>
    </div>
  </header>
</template>