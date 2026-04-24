<template>
  <section id="news" class="py-24 bg-gray-50">
    <div class="container mx-auto px-6">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-20">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            新闻动态
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            了解炬坤最新资讯与行业动态
          </p>
        </div>

        <div v-if="loading" class="text-center py-12">
          <div class="w-8 h-8 border-2 border-gray-300 border-t-gray-900 rounded-full animate-spin mx-auto"></div>
        </div>

        <div v-else class="grid md:grid-cols-3 gap-8">
          <div
            v-for="news in newsList"
            :key="news.id"
            class="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div class="h-40 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <img v-if="news.cover_image" :src="news.cover_image" class="w-full h-full object-cover" alt="">
              <svg v-else class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            <div class="p-6">
              <div class="flex items-center text-sm text-gray-500 mb-3">
                <span>{{ news.category }}</span>
                <span class="mx-2">·</span>
                <span>{{ formatDate(news.created_at) }}</span>
              </div>
              <h3 class="text-lg font-bold text-gray-900 mb-3 line-clamp-2">{{ news.title }}</h3>
              <p class="text-gray-600 text-sm line-clamp-3">{{ news.summary }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const newsList = ref([])
const loading = ref(true)

const formatDate = (dateStr) => {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('zh-CN')
}

onMounted(async () => {
  try {
    // 读取静态JSON数据（用于GitHub Pages部署）
    const res = await fetch('/data/news.json')
    const data = await res.json()
    newsList.value = data
  } catch (error) {
    console.error('获取新闻失败:', error)
  } finally {
    loading.value = false
  }
})
</script>
