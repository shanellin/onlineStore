import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Market.vue')
    },
    {
      path: '/client',
      name: 'client',
      component: () => import('./views/client.vue')
    },
    {
      path: '/pay',
      name: 'pay',
      component: () => import('./views/pay.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    //其餘路徑返回主頁面
    {
      path: '*',
      redirect: (to) => {
        console.log(to.path);
        return '/'
      }
    }
  ]
})
