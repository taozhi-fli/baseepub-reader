import Vue from 'vue'
import Router from 'vue-router'

const reader = () => import ('@/components/index.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect:'/reader'
    }
  ]
})
