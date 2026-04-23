const notFound = (req, res, next) => {
  const error = new Error(`接口不存在 - ${req.originalUrl}`)
  error.status = 404
  next(error)
}

const errorHandler = (err, req, res, next) => {
  console.error('错误:', err.message)

  const status = err.status || 500
  const message = err.message || '服务器内部错误'

  res.status(status).json({
    success: false,
    message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  })
}

module.exports = {
  notFound,
  errorHandler
}
