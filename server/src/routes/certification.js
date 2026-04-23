const express = require('express')
const router = express.Router()
const certificationController = require('../controllers/certification')

// 获取资质证书列表
router.get('/certifications', certificationController.list)

module.exports = router
