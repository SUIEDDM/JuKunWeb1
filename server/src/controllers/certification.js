const db = require('../config/database')

// 获取资质证书列表
exports.list = async (req, res) => {
  try {
    const rows = db.all(
      'SELECT id, name, year, icon, image_url FROM certifications WHERE status = 1 ORDER BY sort_order ASC'
    )

    res.json({
      success: true,
      data: rows
    })
  } catch (error) {
    console.error('获取资质证书列表失败:', error)
    res.status(500).json({
      success: false,
      message: '服务器错误'
    })
  }
}
