import Vue from 'vue'
import Vuex from 'vuex'
import * as storageTools from '@/utils/localStorage' // 引入本地存储
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 当项目运营时，先去本地存储中获得登陆状态
    user: storageTools.getItem('user')
  },
  mutations: {
    // 在mutations中设置state的值
    setUser (state, user) {
      state.user = user
      // 登陆成功后将状态放入本地存储中
      storageTools.setItem('user', user)
    }
  },
  actions: {

  }
})
