import request from '../utils/request'
const manager = () => {
  return request({
    url: '/admin/manager/1',
    method: 'GET'
  })
}

export default {
  manager
}
