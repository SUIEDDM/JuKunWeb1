const db = require('../config/database')

// 提交留言
exports.submit = async (req, res) => {
  try {
    const { name, phone, email, message } = req.body

    // 验证
    if (!name || !phone || !email || !message) {
      return res.status(400).json({
        success: false,
        message: '请填写完整信息'
      })
    }

    // 手机号验证
    if (!/^1[3-9]\d{9}$/.test(phone)) {
      return res.status(400).json({
        success: false,
        message: '请输入有效的手机号码'
      })
    }

    // 邮箱验证
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({
        success: false,
        message: '请输入有效的邮箱地址'
      })
    }

    // 插入数据库
    const result = db.run(
      'INSERT INTO contacts (name, phone, email, message) VALUES (?, ?, ?, ?)',
      [name, phone, email, message]
    )

    res.json({
      success: true,
      message: '留言提交成功',
      data: { id: result.lastInsertRowid }
    })
  } catch (error) {
    console.error('留言提交失败:', error)
    res.status(500).json({
      success: false,
      message: '服务器错误，请稍后重试'
    })
  }
}

// 获取留言列表 (管理后台)
exports.list = async (req, res) => {
  try {
    const { page = 1, pageSize = 10, status } = req.query
    const offset = (page - 1) * pageSize

    let sql = 'SELECT * FROM contacts'
    let countSql = 'SELECT COUNT(*) as total FROM contacts'
    const params = []

    if (status !== undefined) {
      sql += ' WHERE status = ?'
      countSql += ' WHERE status = ?'
      params.push(status)
    }

    sql += ' ORDER BY created_at DESC LIMIT ? OFFSET ?'

    const rows = db.all(sql, [...params, parseInt(pageSize), offset])
    const countResult = db.get(countSql, params)

    res.json({
      success: true,
      data: {
        list: rows,
        total: countResult.total,
        page: parseInt(page),
        pageSize: parseInt(pageSize)
      }
    })
  } catch (error) {
    console.error('获取留言列表失败:', error)
    res.status(500).json({
      success: false,
      message: '服务器错误'
    })
  }
}

// 更新留言状态 (管理后台)
exports.updateStatus = async (req, res) => {
  try {
    const { id } = req.params
    const { status, remark } = req.body

    db.run(
      'UPDATE contacts SET status = ?, remark = ? WHERE id = ?',
      [status, remark || null, id]
    )

    res.json({
      success: true,
      message: '更新成功'
    })
  } catch (error) {
    console.error('更新留言状态失败:', error)
    res.status(500).json({
      success: false,
      message: '服务器错误'
    })
  }
}
