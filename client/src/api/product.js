import api from './index'

// 获取产品列表
export const getProductsList = () => {
  return api.get('/products')
}
