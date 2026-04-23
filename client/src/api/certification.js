import api from './index'

// 获取资质证书列表
export const getCertificationsList = () => {
  return api.get('/certifications')
}
