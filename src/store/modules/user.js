import UserApi from '../../api/user'
import CommodityApi from '../../api/commodity'
import Member from '../../api/member'
import Administrator from '../../api/administrator'
import { setItem, getItem } from '../../utils/storage'
import router from '@/router'
const TOKEN_KEY = 'token'
export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN_KEY) || ''
  }),
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
      setItem(TOKEN_KEY, token)
    }
  },
  actions: {
    async login({ commit }, payload) {
      const response = await UserApi.login(payload)
      //   console.log('vuex=>', response)
      commit('SET_TOKEN', response.data.token)
      return response
    },
    async userLogout({ commit }, payload) {
      const response = await UserApi.logout(payload)
      commit('SET_TOKEN', '')
      router.push('/login')
      return response
    },
    async userInfo({ commit }) {
      const response = await UserApi.getInfo()
      // console.log(response)
      return response
    },
    async statistics1({ commit }) {
      const response = await UserApi.statistics1()
      // console.log(response)
      return response
    },
    async statistics2({ commit }) {
      const response = await UserApi.statistics2()
      // console.log(response)
      return response
    },
    async goods({ commit }) {
      const response = await UserApi.goods()
      // console.log(response)
      return response
    },
    async underReview({ commit }) {
      const response = await CommodityApi.underReview()
      // console.log(response)
      return response
    },
    async onSale({ commit }) {
      const response = await CommodityApi.onSale()
      // console.log(response)
      return response
    },
    async removed({ commit }) {
      const response = await CommodityApi.removed()
      // console.log(response)
      return response
    },
    async waring({ commit }) {
      const response = await CommodityApi.waring()
      // console.log(response)
      return response
    },
    async recycleBin({ commit }) {
      const response = await CommodityApi.recycleBin()
      // console.log(response)
      return response
    },
    async skus({ commit }) {
      const response = await CommodityApi.skus()
      // console.log(response)
      return response
    },
    async coupon({ commit }) {
      const response = await CommodityApi.coupon()
      // console.log(response)
      return response
    },
    async getsort({ commit }) {
      const response = await UserApi.getclassify()
      // console.log(response)
      return response
    },
    async grade({ commit }) {
      const response = await Member.grade()
      // console.log(response)
      return response
    },
    async manager({ commit }) {
      const response = await Administrator.manager()
      // console.log(response)
      return response
    }
  }
}
