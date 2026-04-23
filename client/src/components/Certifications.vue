<template>
  <section id="certifications" class="py-24 bg-white">
    <div class="container mx-auto px-6">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-20">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            资质荣誉
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            专业资质认证，品质保障
          </p>
        </div>

        <div v-if="loading" class="text-center py-12">
          <div class="w-8 h-8 border-2 border-gray-300 border-t-gray-900 rounded-full animate-spin mx-auto"></div>
        </div>

        <div v-else class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div
            v-for="cert in certifications"
            :key="cert.id"
            class="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300"
          >
            <div class="w-20 h-20 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-inner">
              <svg class="w-10 h-10 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="cert.icon" />
              </svg>
            </div>
            <h3 class="text-gray-900 font-semibold mb-1">{{ cert.name }}</h3>
            <p class="text-gray-500 text-sm">{{ cert.year }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getCertificationsList } from '../api/certification'

const certifications = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    const res = await getCertificationsList()
    if (res.success) {
      certifications.value = res.data
    }
  } catch (error) {
    console.error('获取资质证书失败:', error)
  } finally {
    loading.value = false
  }
})
</script>
