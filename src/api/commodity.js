import request from '../utils/request'
const underReview = () => {
  return request({
    url: '/admin/goods/1?tab=checking',
    method: 'GET'
  })
}

const onSale = () => {
  return request({
    url: '/admin/goods/1?tab=saling',
    method: 'GET'
  })
}
const removed = () => {
  return request({
    url: '/admin/goods/1?tab=off',
    method: 'GET'
  })
}
const waring = () => {
  return request({
    url: '/admin/goods/1?tab=min_stock',
    method: 'GET'
  })
}

const recycleBin = () => {
  return request({
    url: '/admin/goods/1?tab=delete',
    method: 'GET'
  })
}
const skus = () => {
  return request({
    url: '/admin/skus/1',
    method: 'GET'
  })
}
const coupon = () => {
  return request({
    url: '/admin/coupon/1',
    method: 'GET'
  })
}
export default {
  underReview,
  onSale,
  removed,
  waring,
  recycleBin,
  skus,
  coupon
}
