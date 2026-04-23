const db = require('../config/database')

// 获取合作伙伴列表
exports.list = async (req, res) => {
  try {
    const rows = db.all(
      'SELECT id, name, icon, logo_url, link_url FROM partners WHERE status = 1 ORDER BY sort_order ASC'
    )

    res.json({
      success: true,
      data: rows
    })
  } catch (error) {
    console.error('获取合作伙伴列表失败:', error)
    res.status(500).json({
      success: false,
      message: '服务器错误'
    })
  }
}
