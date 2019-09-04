import Vue from 'vue'
import Router from 'vue-router'
import login from '../views/login' // 引入login组件

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'login',
      path: '/login', // 输入框地址
      component: login // 组件地址
    }
    // {
    //   path: '/about',
    //   name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
