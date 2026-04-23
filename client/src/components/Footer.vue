<template>
  <footer class="bg-dark-900 border-t border-gray-800">
    <div class="container mx-auto px-6 py-12">
      <div class="grid md:grid-cols-4 gap-8 mb-8">
        <div>
          <div class="flex items-center space-x-2 mb-4">
            <img src="/LOGO.png" alt="炬坤测控" class="h-10 w-auto" />
            <div>
              <h3 class="text-white font-bold text-xl">炬坤测控</h3>
              <p class="text-gray-400 text-xs">JUKUN TECHNOLOGY</p>
            </div>
          </div>
          <p class="text-gray-400 text-sm">
            专注工业机器视觉检测设备研发与生产，为制造业客户提供高精度、智能化的质量检测解决方案。
          </p>
        </div>

        <div>
          <h4 class="text-white font-semibold mb-4">产品服务</h4>
          <ul class="space-y-2">
            <li><a href="#product" class="text-gray-400 hover:text-primary-400 transition-colors">工业视觉检测</a></li>
            <li><a href="#product" class="text-gray-400 hover:text-primary-400 transition-colors">缺陷检测</a></li>
            <li><a href="#product" class="text-gray-400 hover:text-primary-400 transition-colors">自动化产线</a></li>
            <li><a href="#product" class="text-gray-400 hover:text-primary-400 transition-colors">AI算法平台</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-white font-semibold mb-4">关于我们</h4>
          <ul class="space-y-2">
            <li><a href="#about" class="text-gray-400 hover:text-primary-400 transition-colors">公司简介</a></li>
            <li><a href="#advantage" class="text-gray-400 hover:text-primary-400 transition-colors">核心优势</a></li>
            <li><a href="#culture" class="text-gray-400 hover:text-primary-400 transition-colors">企业文化</a></li>
            <li><a href="#contact" class="text-gray-400 hover:text-primary-400 transition-colors">联系我们</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-white font-semibold mb-4">联系方式</h4>
          <ul class="space-y-2">
            <li class="flex items-center text-gray-400">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              0371-62998885
            </li>
            <li class="flex items-center text-gray-400">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@jukun.com
            </li>
            <li class="flex items-start text-gray-400">
              <svg class="w-4 h-4 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              河南省郑州市登封市卢店街道产业集聚区中禾科创产业园3号楼北栋105.403号
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-800 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-400 text-sm mb-4 md:mb-0">
            © {{ new Date().getFullYear() }} 郑州炬坤测控科技有限公司 版权所有
          </p>
          <div class="flex space-x-6">
            <a href="https://www.weibo.com" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-primary-400 transition-colors" title="微博">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10.098 20.323c-3.977.391-7.414-1.406-7.672-4.02-.259-2.609 2.759-5.047 6.74-5.441 3.979-.394 7.413 1.404 7.671 4.018.259 2.6-2.759 5.049-6.739 5.443zM9.05 17.219c-.384.616-1.208.884-1.829.602-.612-.279-.793-.991-.406-1.593.379-.595 1.176-.861 1.793-.583.631.275.822.985.442 1.574zm1.27-1.627c-.141.237-.449.353-.689.253-.236-.09-.307-.361-.168-.592.141-.227.445-.345.684-.248.239.09.315.36.173.587zm.176-2.719c-1.893-.493-4.033.45-4.857 2.118-.836 1.704-.026 3.591 1.886 4.21 1.983.642 4.318-.341 5.132-2.145.8-1.752-.139-3.705-2.161-4.183zM17.616 3.68c-.998-.27-1.684-.06-2.058.416-.364.464-.326 1.112.08 1.575.406.462 1.074.614 1.678.378.604-.236.942-.832.845-1.529-.097-.698-.547-1.07-1.545-.84zM20.09 1.826c-2.191-.592-3.726-.133-4.567.938-.829 1.055-.734 2.543.22 3.625.955 1.082 2.514 1.429 3.848.874 1.334-.555 2.077-1.945 1.858-3.486-.22-1.541-1.285-2.359-3.359-1.951z"/>
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-primary-400 transition-colors" title="微信公众号">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178A1.17 1.17 0 014.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178 1.17 1.17 0 01-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 01.598.082l1.584.926a.272.272 0 00.14.045c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 01-.023-.156.49.49 0 01.201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-7.062-6.122zm-2.18 2.903c.535 0 .969.44.969.982a.976.976 0 01-.969.983.976.976 0 01-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 01-.969.983.976.976 0 01-.969-.983c0-.542.434-.982.97-.982z"/>
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-primary-400 transition-colors" title="抖音">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>
