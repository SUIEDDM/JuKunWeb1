const db = require('../config/database')

// 获取产品列表
exports.list = async (req, res) => {
  try {
    const rows = db.all(
      'SELECT id, title, description, icon, features FROM products WHERE status = 1 ORDER BY sort_order ASC'
    )

    res.json({
      success: true,
      data: rows
    })
  } catch (error) {
    console.error('获取产品列表失败:', error)
    res.status(500).json({
      success: false,
      message: '服务器错误'
    })
  }
}
