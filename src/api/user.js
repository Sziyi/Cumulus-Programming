import request from '../utils/request'
const login = (data) => {
  return request({
    url: '/admin/login',
    method: 'POST',
    data
  })
}

const getInfo = () => {
  return request({
    url: '/admin/getinfo',
    method: 'POST'
  })
}
const logout = () => {
  return request({
    url: '/admin/logout',
    method: 'POST'
  })
}
const statistics1 = () => {
  return request({
    url: '/admin/statistics1',
    method: 'GET'
  })
}
const statistics2 = () => {
  return request({
    url: '/admin/statistics2',
    method: 'GET'
  })
}
const goods = () => {
  return request({
    url: '/admin/goods/1?tab=all',
    method: 'GET'
  })
}
const getclassify = () => {
  return request({
    url: '/admin/category',
    method: 'GET'
  })
}

export default {
  login,
  getInfo,
  logout,
  statistics1,
  statistics2,
  goods,
  getclassify
}
