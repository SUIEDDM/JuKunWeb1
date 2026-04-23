<template>
  <section id="partners" class="py-24 bg-gray-50">
    <div class="container mx-auto px-6">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-20">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            合作伙伴
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            携手知名企业，共创智能制造未来
          </p>
        </div>

        <div v-if="loading" class="text-center py-12">
          <div class="w-8 h-8 border-2 border-gray-300 border-t-gray-900 rounded-full animate-spin mx-auto"></div>
        </div>

        <div v-else class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <div
            v-for="partner in partners"
            :key="partner.id"
            class="bg-white p-6 rounded-lg flex items-center justify-center h-24 hover:shadow-md transition-shadow duration-300"
          >
            <div class="text-center">
              <div class="text-2xl mb-1">{{ partner.icon }}</div>
              <span class="text-gray-600 text-sm font-medium">{{ partner.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getPartnersList } from '../api/partner'

const partners = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    const res = await getPartnersList()
    if (res.success) {
      partners.value = res.data
    }
  } catch (error) {
    console.error('获取合作伙伴失败:', error)
  } finally {
    loading.value = false
  }
})
</script>
