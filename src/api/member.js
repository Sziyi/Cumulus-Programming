import request from '../utils/request'
const grade = () => {
  return request({
    url: '/admin/user_level/1',
    method: 'GET'
  })
}

export default {
  grade
}
