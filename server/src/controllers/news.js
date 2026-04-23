const db = require('../config/database')

// 获取新闻列表
exports.list = async (req, res) => {
  try {
    const { page = 1, pageSize = 10, category } = req.query
    const offset = (page - 1) * pageSize

    let sql = 'SELECT id, title, summary, category, cover_image, view_count, created_at FROM news WHERE status = 1'
    const params = []

    if (category) {
      sql += ' AND category = ?'
      params.push(category)
    }

    sql += ' ORDER BY sort_order ASC, created_at DESC LIMIT ? OFFSET ?'

    const rows = db.all(sql, [...params, parseInt(pageSize), offset])

    res.json({
      success: true,
      data: rows
    })
  } catch (error) {
    console.error('获取新闻列表失败:', error)
    res.status(500).json({
      success: false,
      message: '服务器错误'
    })
  }
}

// 获取新闻详情
exports.detail = async (req, res) => {
  try {
    const { id } = req.params

    const row = db.get(
      'SELECT * FROM news WHERE id = ? AND status = 1',
      [id]
    )

    if (!row) {
      return res.status(404).json({
        success: false,
        message: '新闻不存在'
      })
    }

    // 增加浏览量
    db.run(
      'UPDATE news SET view_count = view_count + 1 WHERE id = ?',
      [id]
    )

    res.json({
      success: true,
      data: row
    })
  } catch (error) {
    console.error('获取新闻详情失败:', error)
    res.status(500).json({
      success: false,
      message: '服务器错误'
    })
  }
}

// 创建新闻 (管理后台)
exports.create = async (req, res) => {
  try {
    const { title, summary, content, category, cover_image, status = 1 } = req.body

    const result = db.run(
      'INSERT INTO news (title, summary, content, category, cover_image, status) VALUES (?, ?, ?, ?, ?, ?)',
      [title, summary, content, category, cover_image, status]
    )

    res.json({
      success: true,
      message: '创建成功',
      data: { id: result.lastInsertRowid }
    })
  } catch (error) {
    console.error('创建新闻失败:', error)
    res.status(500).json({
      success: false,
      message: '服务器错误'
    })
  }
}

// 更新新闻 (管理后台)
exports.update = async (req, res) => {
  try {
    const { id } = req.params
    const { title, summary, content, category, cover_image, status } = req.body

    db.run(
      'UPDATE news SET title = ?, summary = ?, content = ?, category = ?, cover_image = ?, status = ? WHERE id = ?',
      [title, summary, content, category, cover_image, status, id]
    )

    res.json({
      success: true,
      message: '更新成功'
    })
  } catch (error) {
    console.error('更新新闻失败:', error)
    res.status(500).json({
      success: false,
      message: '服务器错误'
    })
  }
}

// 删除新闻 (管理后台)
exports.remove = async (req, res) => {
  try {
    const { id } = req.params

    db.run('DELETE FROM news WHERE id = ?', [id])

    res.json({
      success: true,
      message: '删除成功'
    })
  } catch (error) {
    console.error('删除新闻失败:', error)
    res.status(500).json({
      success: false,
      message: '服务器错误'
    })
  }
}
