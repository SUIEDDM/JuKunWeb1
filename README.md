# 郑州炬坤测控科技有限公司 - 企业官网

基于 Vue3 + Node.js + MySQL 的前后端分离企业官网

## 项目特点

- **前端**: Vue3 + Vite + TailwindCSS + Pinia
- **后端**: Node.js + Express + MySQL
- **部署**: Nginx 反向代理 + PM2 进程管理

## 项目结构

```
JuKunWeb/
├── client/                    # 前端项目
│   ├── src/
│   │   ├── api/              # API 接口
│   │   ├── components/       # Vue 组件
│   │   ├── stores/           # Pinia 状态管理
│   │   └── ...
│   ├── package.json
│   └── vite.config.js
│
├── server/                    # 后端项目
│   ├── src/
│   │   ├── config/           # 配置文件
│   │   ├── controllers/      # 控制器
│   │   ├── routes/           # 路由
│   │   ├── middlewares/      # 中间件
│   │   └── app.js            # 入口文件
│   ├── package.json
│   └── .env                  # 环境变量
│
├── sql/                       # 数据库脚本
│   └── init.sql
│
├── nginx.conf                 # Nginx 配置示例
├── ecosystem.config.json      # PM2 配置
└── start-dev.bat             # 开发启动脚本
```

## 快速开始

### 1. 环境要求

- Node.js 18+
- MySQL 8.0+
- npm 或 yarn

### 2. 数据库初始化

```bash
# 登录 MySQL
mysql -u root -p

# 执行初始化脚本
source sql/init.sql
```

### 3. 后端配置与启动

```bash
cd server

# 安装依赖
npm install

# 配置环境变量 (复制 .env.example 为 .env 并修改)
cp .env.example .env

# 启动开发服务器
npm run dev
```

### 4. 前端配置与启动

```bash
cd client

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

### 5. 一键启动 (Windows)

双击 `start-dev.bat` 同时启动前后端

## API 接口

| 方法 | 路径 | 描述 |
|------|------|------|
| POST | /api/contact | 提交留言 |
| GET | /api/news | 获取新闻列表 |
| GET | /api/news/:id | 获取新闻详情 |
| GET | /api/cases | 获取案例列表 |
| GET | /api/products | 获取产品列表 |
| GET | /api/partners | 获取合作伙伴 |
| GET | /api/certifications | 获取资质证书 |

## 生产部署

### 1. 构建前端

```bash
cd client
npm run build
```

### 2. 启动后端

```bash
cd server
npm install --production
pm2 start ../ecosystem.config.json
```

### 3. Nginx 配置

```bash
# 复制配置文件
sudo cp nginx.conf /etc/nginx/sites-available/jukun
sudo ln -s /etc/nginx/sites-available/jukun /etc/nginx/sites-enabled/

# 测试配置
sudo nginx -t

# 重载配置
sudo nginx -s reload
```

## 开发指南

### 前端开发

- 组件位于 `client/src/components/`
- API 接口位于 `client/src/api/`
- 状态管理位于 `client/src/stores/`

### 后端开发

- 路由位于 `server/src/routes/`
- 控制器位于 `server/src/controllers/`
- 中间件位于 `server/src/middlewares/`

## 环境变量

### 后端 (.env)

```
PORT=3001
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=jukun_website
JWT_SECRET=your_jwt_secret
FRONTEND_URL=http://localhost:3000
```

## 浏览器支持

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## 许可证

© 2024 郑州炬坤测控科技有限公司 版权所有
