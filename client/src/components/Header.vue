<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="isScrolled ? 'glass-dark bg-dark-900/90' : 'bg-transparent'"
  >
    <nav class="container mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-2">
          <img src="/LOGO.png" alt="炬坤测控" class="h-10 w-auto" />
          <div>
            <h1 class="text-white font-bold text-xl">炬坤测控</h1>
            <p class="text-gray-400 text-xs">JUKUN TECHNOLOGY</p>
          </div>
        </div>

        <div class="hidden md:flex items-center space-x-8">
          <a
            v-for="item in menuItems"
            :key="item.name"
            :href="item.href"
            class="text-gray-300 hover:text-white transition-colors duration-300 relative group"
          >
            {{ item.name }}
            <span
              class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"
            ></span>
          </a>
        </div>

        <button
          class="md:hidden text-white"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              v-if="!isMobileMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <div
        v-if="isMobileMenuOpen"
        class="md:hidden mt-4 pb-4 border-t border-gray-700 pt-4"
      >
        <div class="flex flex-col space-y-4">
          <a
            v-for="item in menuItems"
            :key="item.name"
            :href="item.href"
            class="text-gray-300 hover:text-white transition-colors duration-300"
            @click="isMobileMenuOpen = false"
          >
            {{ item.name }}
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const menuItems = [
  { name: '首页', href: '#home' },
  { name: '产品', href: '#product' },
  { name: '解决方案', href: '#solution' },
  { name: '案例', href: '#cases' },
  { name: '关于我们', href: '#about' },
  { name: '联系我们', href: '#contact' },
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
