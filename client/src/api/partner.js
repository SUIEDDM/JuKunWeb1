import api from './index'

// 获取合作伙伴列表
export const getPartnersList = () => {
  return api.get('/partners')
}
