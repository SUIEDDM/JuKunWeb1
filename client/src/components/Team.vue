<template>
  <section id="team" class="py-24 bg-white">
    <div class="container mx-auto px-6">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-20">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            核心团队
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            汇聚行业精英，打造专业技术团队
          </p>
        </div>

        <div class="grid md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
          <div
            v-for="(member, index) in team"
            :key="index"
            class="text-center group"
          >
            <div class="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center relative overflow-hidden">
              <svg class="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-1">{{ member.name }}</h3>
            <p class="text-gray-500 text-sm mb-2">{{ member.position }}</p>
            <p class="text-gray-600 text-sm">{{ member.expertise }}</p>
          </div>
        </div>

        <div class="bg-gray-50 p-12 rounded-lg">
          <h3 class="text-2xl font-bold text-gray-900 text-center mb-8">团队实力</h3>
          <div class="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div class="text-4xl font-bold text-gray-900 mb-2">50+</div>
              <div class="text-gray-600">研发人员</div>
            </div>
            <div>
              <div class="text-4xl font-bold text-gray-900 mb-2">10+</div>
              <div class="text-gray-600">平均经验(年)</div>
            </div>
            <div>
              <div class="text-4xl font-bold text-gray-900 mb-2">20+</div>
              <div class="text-gray-600">硕博人才</div>
            </div>
            <div>
              <div class="text-4xl font-bold text-gray-900 mb-2">30+</div>
              <div class="text-gray-600">技术专利</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const team = [
  {
    name: '张总工程师',
    position: '首席技术官',
    expertise: '机器视觉算法专家'
  },
  {
    name: '李博士',
    position: 'AI算法负责人',
    expertise: '深度学习、图像处理'
  },
  {
    name: '王经理',
    position: '项目经理',
    expertise: 'PMP认证，项目管理'
  },
  {
    name: '陈工程师',
    position: '光学系统专家',
    expertise: '光学设计、成像系统'
  },
  {
    name: '刘工程师',
    position: '软件开发主管',
    expertise: '系统架构、软件开发'
  },
  {
    name: '赵工程师',
    position: '硬件设计主管',
    expertise: '嵌入式系统、电路设计'
  },
  {
    name: '孙经理',
    position: '技术支持经理',
    expertise: '客户服务、技术培训'
  },
  {
    name: '周工程师',
    position: '算法工程师',
    expertise: '缺陷检测算法研发'
  }
]
</script>
