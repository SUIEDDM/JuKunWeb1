const express = require('express')
const router = express.Router()
const caseController = require('../controllers/case')

// 获取案例列表
router.get('/cases', caseController.list)

// 获取案例详情
router.get('/cases/:id', caseController.detail)

module.exports = router
