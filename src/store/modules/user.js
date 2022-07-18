import UserApi from '../../api/user'
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
    }
  }
}
