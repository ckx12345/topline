import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入样式

// 导入vant
import Vant from 'vant'
import 'vant/lib/index.css'
import './style/index.less'
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
