<template>
  <section id="advantage" class="py-24 bg-white">
    <div class="container mx-auto px-6">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-20">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            核心优势
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            技术领先，服务专业，为客户提供卓越价值
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <div
            v-for="(advantage, index) in advantages"
            :key="index"
            class="text-center"
          >
            <div class="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="advantage.icon" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">{{ advantage.title }}</h3>
            <p class="text-gray-600">{{ advantage.description }}</p>
          </div>
        </div>

        <div class="bg-gray-50 p-12 md:p-20 rounded-lg">
          <div class="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 class="text-3xl font-bold text-gray-900 mb-6">专业项目管理体系</h3>
              <p class="text-lg text-gray-600 mb-8">
                采用国际先进的项目管理方法，确保每个项目高质量交付
              </p>
              <div class="space-y-6">
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span class="text-white font-bold">PD</span>
                  </div>
                  <div>
                    <h4 class="text-xl font-semibold text-gray-900 mb-2">PDCA 循环管理</h4>
                    <p class="text-gray-600">计划-执行-检查-行动，持续改进项目质量</p>
                  </div>
                </div>
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span class="text-white font-bold">PM</span>
                  </div>
                  <div>
                    <h4 class="text-xl font-semibold text-gray-900 mb-2">PMP 项目管理</h4>
                    <p class="text-gray-600">专业项目管理认证，规范化项目流程</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="space-y-6">
              <div>
                <div class="flex items-center justify-between mb-3">
                  <span class="text-gray-900 font-semibold">检测精度</span>
                  <span class="text-gray-900 font-bold">99.9%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-gray-900 h-2 rounded-full" style="width: 99.9%"></div>
                </div>
              </div>

              <div>
                <div class="flex items-center justify-between mb-3">
                  <span class="text-gray-900 font-semibold">客户满意度</span>
                  <span class="text-gray-900 font-bold">98%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-gray-900 h-2 rounded-full" style="width: 98%"></div>
                </div>
              </div>

              <div>
                <div class="flex items-center justify-between mb-3">
                  <span class="text-gray-900 font-semibold">项目按时交付率</span>
                  <span class="text-gray-900 font-bold">97%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-gray-900 h-2 rounded-full" style="width: 97%"></div>
                </div>
              </div>

              <div>
                <div class="flex items-center justify-between mb-3">
                  <span class="text-gray-900 font-semibold">技术响应速度</span>
                  <span class="text-gray-900 font-bold">2小时内</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-gray-900 h-2 rounded-full" style="width: 95%"></div>
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
const advantages = [
  {
    title: 'AI算法优势',
    description: '自主研发深度学习算法，持续优化模型性能',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5a2 2 0 012-2h1C9.716 3 14.284 3 6v11.469c0 .525.425.948.948 1.846l-.707.707m2.828-9.9a5 5 0 10-7.072 0l.548-.547A3.374 3.374 0 0014 18.469V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5a2 2 0 012-2h1C9.716 3 14.284 3 6v11.469c0 .525.425.948.948 1.846l-.707.707m2.828-9.9a5 5 0 10-7.072 0l.548-.547c.78.78 1.838 1.805 1.838 2.846 0 .525-.425.948-.948.948-1.846l-.707.707'
  },
  {
    title: '高精度检测',
    description: '微米级检测精度，满足精密制造需求',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
  },
  {
    title: '系统稳定性',
    description: '7x24小时稳定运行，故障率极低',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 0-11.622 0-5.591 3.824-10.29 9-11.622 0 1.042-.133 2.052-.382 3.016z'
  },
  {
    title: '快速交付',
    description: '高效项目管理，快速响应客户需求',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z'
  }
]
</script>
