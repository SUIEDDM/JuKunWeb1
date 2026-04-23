<template>
  <section id="product" class="py-24 bg-gray-50">
    <div class="container mx-auto px-6">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-20">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            产品与服务
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            为制造业提供全方位的视觉检测解决方案
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <div
            v-for="(product, index) in products"
            :key="index"
            class="bg-white p-10 rounded-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div class="w-14 h-14 bg-gray-900 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="product.icon" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">{{ product.title }}</h3>
            <p class="text-gray-600 mb-6">{{ product.description }}</p>
            <ul class="space-y-2">
              <li
                v-for="(feature, idx) in product.features"
                :key="idx"
                class="flex items-center text-gray-700"
              >
                <svg class="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                {{ feature }}
              </li>
            </ul>
          </div>
        </div>

        <div class="text-center mb-12">
          <h3 class="text-3xl font-bold text-gray-900 mb-8">应用行业</h3>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div
            v-for="(industry, index) in industries"
            :key="index"
            class="bg-white p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300"
          >
            <div class="text-4xl mb-4">{{ industry.icon }}</div>
            <div class="text-gray-900 font-semibold">{{ industry.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const products = [
  {
    title: '工业视觉检测系统',
    description: '基于深度学习的高精度视觉检测系统，可识别各类产品缺陷',
    icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
    features: [
      '高精度缺陷识别',
      '实时在线检测',
      '自适应算法优化',
      '数据统计分析'
    ]
  },
  {
    title: '自动化产线检测',
    description: '全自动产线质量检测方案，提升生产效率，降低人工成本',
    icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z',
    features: [
      '全自动化流程',
      '高速检测能力',
      '智能分拣系统',
      '生产数据追溯'
    ]
  },
  {
    title: '缺陷检测解决方案',
    description: '针对不同行业定制的缺陷检测方案，覆盖多种产品类型',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 0-11.622 0-5.591 3.824-10.29 9-11.622 0 1.042-.133 2.052-.382 3.016z',
    features: [
      '多类型缺陷检测',
      '行业定制方案',
      'AI智能学习',
      '误报率低'
    ]
  },
  {
    title: '尺寸测量系统',
    description: '高精度尺寸测量解决方案，满足精密制造的质量要求',
    icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z',
    features: [
      '微米级精度',
      '多维度测量',
      '快速检测',
      '数据可视化'
    ]
  },
  {
    title: 'AI算法平台',
    description: '自主研发的机器视觉AI算法平台，支持快速模型训练与部署',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    features: [
      '深度学习框架',
      '模型快速训练',
      '云端部署支持',
      '持续算法优化'
    ]
  },
  {
    title: '智能检测设备',
    description: '集成化智能检测设备，即插即用，快速部署上线',
    icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
    features: [
      '一体化设计',
      '易于部署',
      '维护简单',
      '性价比高'
    ]
  }
]

const industries = [
  { name: '电子制造', icon: '📱' },
  { name: '汽车零部件', icon: '🚗' },
  { name: '医疗器械', icon: '🏥' },
  { name: '食品包装', icon: '📦' },
  { name: '纺织服装', icon: '👕' },
  { name: '塑料制品', icon: '🧴' },
  { name: '五金制品', icon: '🔧' },
  { name: '新能源', icon: '⚡' }
]
</script>
