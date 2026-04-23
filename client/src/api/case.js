import api from './index'

// 获取案例列表
export const getCasesList = () => {
  return api.get('/cases')
}

// 获取案例详情
export const getCaseDetail = (id) => {
  return api.get(`/cases/${id}`)
}
