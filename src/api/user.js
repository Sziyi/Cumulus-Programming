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
export default {
  login,
  getInfo,
  logout
}
