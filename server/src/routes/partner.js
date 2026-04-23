const express = require('express')
const router = express.Router()
const partnerController = require('../controllers/partner')

// 获取合作伙伴列表
router.get('/partners', partnerController.list)

module.exports = router
