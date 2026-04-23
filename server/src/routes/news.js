const express = require('express')
const router = express.Router()
const newsController = require('../controllers/news')

// 获取新闻列表
router.get('/news', newsController.list)

// 获取新闻详情
router.get('/news/:id', newsController.detail)

module.exports = router
