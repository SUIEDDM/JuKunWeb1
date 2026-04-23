const express = require('express')
const router = express.Router()

const contactRoutes = require('./contact')
const newsRoutes = require('./news')
const caseRoutes = require('./case')
const productRoutes = require('./product')
const partnerRoutes = require('./partner')
const certificationRoutes = require('./certification')

router.use(contactRoutes)
router.use(newsRoutes)
router.use(caseRoutes)
router.use(productRoutes)
router.use(partnerRoutes)
router.use(certificationRoutes)

module.exports = router
