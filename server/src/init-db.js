const db = require('./config/database')
const path = require('path')
const fs = require('fs')

async function init() {
  console.log('正在初始化数据库...')

  // 初始化数据库连接
  await db.initDb()

  // 创建表
  db.exec(`
CREATE TABLE IF NOT EXISTS contacts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  status INTEGER DEFAULT 0,
  remark TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS news (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  summary TEXT,
  content TEXT,
  category TEXT DEFAULT '企业动态',
  cover_image TEXT,
  view_count INTEGER DEFAULT 0,
  status INTEGER DEFAULT 1,
  sort_order INTEGER DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS cases (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  industry TEXT NOT NULL,
  icon TEXT,
  description TEXT,
  efficiency TEXT,
  accuracy TEXT,
  cover_image TEXT,
  status INTEGER DEFAULT 1,
  sort_order INTEGER DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS products (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  description TEXT,
  icon TEXT,
  features TEXT,
  status INTEGER DEFAULT 1,
  sort_order INTEGER DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS partners (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  icon TEXT,
  logo_url TEXT,
  link_url TEXT,
  status INTEGER DEFAULT 1,
  sort_order INTEGER DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS certifications (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  year TEXT,
  icon TEXT,
  image_url TEXT,
  status INTEGER DEFAULT 1,
  sort_order INTEGER DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS admins (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL,
  nickname TEXT,
  role TEXT DEFAULT 'admin',
  last_login_at DATETIME,
  status INTEGER DEFAULT 1,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
`)

  console.log('✅ 数据表创建成功')

  // 插入初始数据
  const newsData = [
    ['炬坤测控参加2024中国智能制造博览会', '我司携最新AI视觉检测系统亮相博览会，获得广泛关注，现场签约多家意向客户。', '<p>我司携最新AI视觉检测系统亮相博览会，获得广泛关注，现场签约多家意向客户。</p>', '企业动态'],
    ['炬坤测控荣获高新技术企业认定', '经河南省科技厅认定，我司正式获得高新技术企业资质，标志着公司技术实力获得官方认可。', '<p>经河南省科技厅认定，我司正式获得高新技术企业资质。</p>', '企业荣誉'],
    ['机器视觉在工业检测中的最新应用趋势', '随着AI技术发展，机器视觉在工业检测领域的应用不断深化，本文分析最新技术趋势。', '<p>随着AI技术发展，机器视觉在工业检测领域的应用不断深化。</p>', '行业资讯']
  ]

  for (const news of newsData) {
    db.run('INSERT INTO news (title, summary, content, category) VALUES (?, ?, ?, ?)', news)
  }

  const casesData = [
    ['某知名电子企业PCB检测项目', '电子制造', '📱', '为PCB生产线部署视觉检测系统，实现焊点缺陷、线路断路短路等问题的自动检测。', '300%', '99.8%'],
    ['某汽车零部件供应商外观检测', '汽车零部件', '🚗', '针对汽车金属件表面缺陷检测，识别划痕、凹坑、锈蚀等问题，替代人工检测。', '250%', '99.5%'],
    ['某食品企业包装检测系统', '食品包装', '📦', '实现食品包装外观、标签、日期喷码、封口完整性的全自动检测。', '400%', '99.9%'],
    ['某锂电池企业电芯检测', '新能源', '⚡', '为锂电池生产线提供电芯外观检测、尺寸测量、焊缝检测等完整解决方案。', '200%', '99.7%'],
    ['某医疗器械企业精密检测', '医疗器械', '🏥', '针对医疗器械高精度要求，提供微米级尺寸测量和外观缺陷检测。', '180%', '99.95%'],
    ['某纺织企业布匹检测', '纺织服装', '👕', '实现布匹瑕疵自动检测，识别断经、断纬、油污、破洞等缺陷。', '350%', '98.5%']
  ]

  for (const c of casesData) {
    db.run('INSERT INTO cases (title, industry, icon, description, efficiency, accuracy) VALUES (?, ?, ?, ?, ?, ?)', c)
  }

  const productsData = [
    ['工业视觉检测系统', '基于深度学习的高精度视觉检测系统', 'M15 12a3 3 0 11-6 0 3 3 0 016 0z', '["高精度缺陷识别","实时在线检测"]', 1],
    ['自动化产线检测', '全自动产线质量检测方案', 'M9 3v2m6-2v2', '["全自动化流程","高速检测能力"]', 2],
    ['缺陷检测解决方案', '针对不同行业定制的缺陷检测方案', 'M9 12l2 2 4-4', '["多类型缺陷检测","行业定制方案"]', 3],
    ['尺寸测量系统', '高精度尺寸测量解决方案', 'M19 11H5', '["微米级精度","多维度测量"]', 4],
    ['AI算法平台', '自主研发的机器视觉AI算法平台', 'M9.75 17L9 20l-1 1h8', '["深度学习框架","模型快速训练"]', 5],
    ['智能检测设备', '集成化智能检测设备', 'M12 18h.01', '["一体化设计","易于部署"]', 6]
  ]

  for (const p of productsData) {
    db.run('INSERT INTO products (title, description, icon, features, sort_order) VALUES (?, ?, ?, ?, ?)', p)
  }

  const partnersData = [
    ['华为', '📱', 1], ['比亚迪', '🚗', 2], ['富士康', '🏭', 3], ['宁德时代', '⚡', 4],
    ['立讯精密', '🔌', 5], ['歌尔股份', '🎧', 6], ['海尔集团', '🏠', 7], ['格力电器', '❄️', 8],
    ['美的集团', '🧊', 9], ['TCL科技', '📺', 10], ['京东方', '💻', 11], ['欣旺达', '🔋', 12]
  ]

  for (const p of partnersData) {
    db.run('INSERT INTO partners (name, icon, sort_order) VALUES (?, ?, ?)', p)
  }

  const certsData = [
    ['高新技术企业', '2023年', 'M9 12l2 2 4-4', 1],
    ['ISO9001认证', '2022年', 'M9 12l2 2 4-4m5.618', 2],
    ['软件企业认定', '2022年', 'M10 20l4-16', 3],
    ['发明专利', '多项', 'M9 12h6m-6 4h6', 4],
    ['实用新型专利', '多项', 'M13 10V3L4 14h7', 5],
    ['软件著作权', '多项', 'M9.75 17L9 20', 6],
    ['AAA信用等级', '2023年', 'M11.049 2.927c.3', 7],
    ['质量诚信企业', '2023年', 'M9 12l2 2 4-4m6', 8]
  ]

  for (const c of certsData) {
    db.run('INSERT INTO certifications (name, year, icon, sort_order) VALUES (?, ?, ?, ?)', c)
  }

  console.log('✅ 初始数据插入成功')
  console.log('🎉 数据库初始化完成！')
  console.log(`数据库文件位置: ${path.join(__dirname, '../data', 'jukun.db')}`)
}

init().catch(err => {
  console.error('初始化失败:', err)
  process.exit(1)
})