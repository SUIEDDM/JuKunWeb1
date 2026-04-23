import api from './index'

// 提交留言
export const submitContact = (data) => {
  return api.post('/contact', data)
}

// 获取留言列表（管理后台）
export const getContacts = (params) => {
  return api.get('/contacts', { params })
}

// 更新留言状态（管理后台）
export const updateContactStatus = (id, data) => {
  return api.put(`/contacts/${id}`, data)
}
