const express = require('express')
const router = express.Router()
const { body } = require('express-validator')
const contactController = require('../controllers/contact')

// 提交留言
router.post('/contact', [
  body('name').notEmpty().withMessage('请输入姓名'),
  body('phone').matches(/^1[3-9]\d{9}$/).withMessage('请输入有效的手机号码'),
  body('email').isEmail().withMessage('请输入有效的邮箱地址'),
  body('message').notEmpty().withMessage('请输入留言内容')
], contactController.submit)

module.exports = router
