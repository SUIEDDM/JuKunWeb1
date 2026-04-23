const initSqlJs = require('sql.js')
const path = require('path')
const fs = require('fs')

const dbPath = path.join(__dirname, '../../data', 'jukun.db')

let db = null
let SQL = null

const initDb = async () => {
  if (db) return db

  SQL = await initSqlJs()

  // 确保data目录存在
  const dataDir = path.join(__dirname, '../../data')
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true })
  }

  // 如果数据库文件存在，加载它
  if (fs.existsSync(dbPath)) {
    const buffer = fs.readFileSync(dbPath)
    db = new SQL.Database(buffer)
  } else {
    db = new SQL.Database()
  }

  return db
}

const saveDb = () => {
  if (db) {
    const data = db.export()
    const buffer = Buffer.from(data)
    fs.writeFileSync(dbPath, buffer)
  }
}

module.exports = {
  initDb,
  saveDb,

  // 查询单行
  get: (sql, params = []) => {
    const stmt = db.prepare(sql)
    stmt.bind(params)
    if (stmt.step()) {
      const row = stmt.getAsObject()
      stmt.free()
      return row
    }
    stmt.free()
    return null
  },

  // 查询多行
  all: (sql, params = []) => {
    const results = []
    const stmt = db.prepare(sql)
    stmt.bind(params)
    while (stmt.step()) {
      results.push(stmt.getAsObject())
    }
    stmt.free()
    return results
  },

  // 执行语句（INSERT/UPDATE/DELETE）
  run: (sql, params = []) => {
    db.run(sql, params)
    saveDb()
    const lastId = db.exec('SELECT last_insert_rowid() as id')[0]?.values[0]?.[0] || 0
    return { lastInsertRowid: lastId, changes: db.getRowsModified() }
  },

  // 批量执行
  exec: (sql) => {
    db.run(sql)
    saveDb()
  },

  // 获取原始db对象
  getDb: () => db
}
