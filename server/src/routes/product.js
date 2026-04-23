const express = require('express')
const router = express.Router()
const productController = require('../controllers/product')

// 获取产品列表
router.get('/products', productController.list)

module.exports = router
