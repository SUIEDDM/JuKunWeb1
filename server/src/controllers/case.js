const db = require('../config/database')

// 获取案例列表
exports.list = async (req, res) => {
  try {
    const rows = db.all(
      'SELECT id, title, industry, icon, description, efficiency, accuracy, cover_image FROM cases WHERE status = 1 ORDER BY sort_order ASC, created_at DESC'
    )

    res.json({
      success: true,
      data: rows
    })
  } catch (error) {
    console.error('获取案例列表失败:', error)
    res.status(500).json({
      success: false,
      message: '服务器错误'
    })
  }
}

// 获取案例详情
exports.detail = async (req, res) => {
  try {
    const { id } = req.params

    const row = db.get(
      'SELECT * FROM cases WHERE id = ? AND status = 1',
      [id]
    )

    if (!row) {
      return res.status(404).json({
        success: false,
        message: '案例不存在'
      })
    }

    res.json({
      success: true,
      data: row
    })
  } catch (error) {
    console.error('获取案例详情失败:', error)
    res.status(500).json({
      success: false,
      message: '服务器错误'
    })
  }
}
