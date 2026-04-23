require('dotenv').config()
const express = require('express')
const corsMiddleware = require('./middlewares/cors')
const { notFound, errorHandler } = require('./middlewares/error')
const routes = require('./routes')
const { initDb } = require('./config/database')

const app = express()

// 中间件
app.use(corsMiddleware)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// 静态文件（上传的图片等）
app.use('/uploads', express.static('uploads'))

// API路由
app.use('/api', routes)

// 健康检查
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// 错误处理
app.use(notFound)
app.use(errorHandler)

// 初始化数据库并启动服务器
const PORT = process.env.PORT || 3001

async function start() {
  try {
    // 初始化数据库
    await initDb()
    console.log('✅ 数据库初始化成功')

    // 启动服务器
    app.listen(PORT, () => {
      console.log(`🚀 服务器运行在 http://localhost:${PORT}`)
      console.log(`📡 API地址: http://localhost:${PORT}/api`)
    })
  } catch (error) {
    console.error('❌ 启动失败:', error)
    process.exit(1)
  }
}

start()

module.exports = app