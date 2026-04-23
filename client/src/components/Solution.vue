<template>
  <section id="solution" class="py-24 bg-white">
    <div class="container mx-auto px-6">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-20">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            行业解决方案
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            针对不同行业特点，提供定制化的视觉检测解决方案
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8 mb-20">
          <div
            v-for="(solution, index) in solutions"
            :key="index"
            class="group bg-gray-50 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <div class="h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
              <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              <div class="relative z-10 text-center">
                <div class="text-5xl mb-3">{{ solution.icon }}</div>
                <h3 class="text-2xl font-bold text-white">{{ solution.title }}</h3>
              </div>
            </div>
            <div class="p-8">
              <p class="text-gray-600 mb-6">{{ solution.description }}</p>
              <div class="space-y-3">
                <h4 class="font-semibold text-gray-900">核心功能：</h4>
                <ul class="grid grid-cols-2 gap-2">
                  <li
                    v-for="(feature, idx) in solution.features"
                    :key="idx"
                    class="flex items-center text-gray-700 text-sm"
                  >
                    <svg class="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {{ feature }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-gray-50 p-12 rounded-lg">
          <h3 class="text-3xl font-bold text-gray-900 text-center mb-12">解决方案流程</h3>
          <div class="grid md:grid-cols-4 gap-8">
            <div
              v-for="(step, index) in steps"
              :key="index"
              class="text-center relative"
            >
              <div class="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                <span class="text-white font-bold text-xl">{{ index + 1 }}</span>
              </div>
              <h4 class="text-lg font-semibold text-gray-900 mb-2">{{ step.title }}</h4>
              <p class="text-gray-600 text-sm">{{ step.description }}</p>
              <div
                v-if="index < steps.length - 1"
                class="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gray-300"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const solutions = [
  {
    title: '电子制造行业',
    icon: '📱',
    description: '针对PCB板、电子元器件、芯片等电子产品的高精度外观检测，识别划痕、缺件、偏移、焊点缺陷等问题。',
    features: ['PCB缺陷检测', '元器件定位', '焊点质量检测', '尺寸测量', '字符识别', '包装检测']
  },
  {
    title: '汽车零部件',
    icon: '🚗',
    description: '为汽车零部件制造商提供外观缺陷检测、尺寸测量、装配验证等解决方案，确保产品质量符合标准。',
    features: ['表面缺陷检测', '尺寸精密测量', '装配完整性', '字符追溯', '螺纹检测', '密封件检测']
  },
  {
    title: '食品包装行业',
    icon: '📦',
    description: '实现食品包装的外观检测、标签识别、日期喷码检测、封口完整性检测，保障食品安全。',
    features: ['包装外观检测', '标签识别', '日期喷码检测', '封口检测', '液位检测', '异物检测']
  },
  {
    title: '新能源行业',
    icon: '⚡',
    description: '为锂电池、光伏组件等新能源产品提供全流程视觉检测方案，覆盖极片、电芯、模组等环节。',
    features: ['极片缺陷检测', '电芯外观检测', '焊缝检测', '尺寸测量', 'PACK检测', '光伏EL检测']
  }
]

const steps = [
  {
    title: '需求调研',
    description: '深入了解客户生产流程和检测需求'
  },
  {
    title: '方案设计',
    description: '定制化设计视觉检测解决方案'
  },
  {
    title: '系统集成',
    description: '设备安装调试与产线集成'
  },
  {
    title: '售后支持',
    description: '持续技术支持和系统优化升级'
  }
]
</script>
