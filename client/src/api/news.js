import api from './index'

// 获取新闻列表
export const getNewsList = (params) => {
  return api.get('/news', { params })
}

// 获取新闻详情
export const getNewsDetail = (id) => {
  return api.get(`/news/${id}`)
}
