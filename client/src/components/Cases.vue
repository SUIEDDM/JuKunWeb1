<template>
  <section id="cases" class="py-24 bg-gray-50">
    <div class="container mx-auto px-6">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-20">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            成功案例
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            服务众多知名企业，助力客户实现智能制造转型升级
          </p>
        </div>

        <div v-if="loading" class="text-center py-12">
          <div class="w-8 h-8 border-2 border-gray-300 border-t-gray-900 rounded-full animate-spin mx-auto"></div>
        </div>

        <div v-else class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="caseItem in cases"
            :key="caseItem.id"
            class="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
          >
            <div class="h-48 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center relative overflow-hidden">
              <div class="absolute inset-0 bg-black/30"></div>
              <div class="relative z-10 text-center">
                <div class="text-4xl mb-2">{{ caseItem.icon }}</div>
                <span class="text-white font-semibold">{{ caseItem.industry }}</span>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-3">{{ caseItem.title }}</h3>
              <p class="text-gray-600 mb-4 text-sm">{{ caseItem.description }}</p>
              <div class="border-t pt-4">
                <div class="flex items-center justify-between text-sm">
                  <span class="text-gray-500">检测效率提升</span>
                  <span class="text-green-600 font-semibold">{{ caseItem.efficiency }}</span>
                </div>
                <div class="flex items-center justify-between text-sm mt-2">
                  <span class="text-gray-500">缺陷检出率</span>
                  <span class="text-green-600 font-semibold">{{ caseItem.accuracy }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getCasesList } from '../api/case'

const cases = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    const res = await getCasesList()
    if (res.success) {
      cases.value = res.data
    }
  } catch (error) {
    console.error('获取案例失败:', error)
  } finally {
    loading.value = false
  }
})
</script>
