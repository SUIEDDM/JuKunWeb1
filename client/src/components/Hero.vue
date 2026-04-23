<template>
  <section id="home" class="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
    <video
      ref="videoRef"
      autoplay
      muted
      loop
      playsinline
      preload="auto"
      class="absolute inset-0 w-full h-full object-cover"
      :class="{ 'opacity-0': !videoLoaded, 'opacity-100 transition-opacity duration-1000': videoLoaded }"
      @loadeddata="onVideoLoaded"
    >
      <source src="/首页.mp4" type="video/mp4" />
    </video>

    <div v-if="!videoLoaded" class="absolute inset-0 bg-gradient-to-br from-dark-900 to-dark-800"></div>

    <div class="absolute inset-0 bg-black/40"></div>

    <div class="relative z-10 container mx-auto px-6 text-center">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
          精准视界，智造未来
        </h1>
        <p class="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto font-light animate-fade-in-up delay-200">
          专注工业机器视觉检测设备研发与生产
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400">
          <a
            href="#product"
            class="px-10 py-4 bg-white text-black font-semibold rounded hover:bg-gray-100 transition-all duration-300"
          >
            了解产品
          </a>
          <a
            href="#contact"
            class="px-10 py-4 border-2 border-white text-white font-semibold rounded hover:bg-white hover:text-black transition-all duration-300"
          >
            联系我们
          </a>
        </div>
      </div>
    </div>

    <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const videoRef = ref(null)
const videoLoaded = ref(false)

const onVideoLoaded = () => {
  videoLoaded.value = true
}

onMounted(() => {
  if (videoRef.value) {
    videoRef.value.play().catch(err => {
      console.log('视频自动播放失败:', err)
    })
  }
})
</script>