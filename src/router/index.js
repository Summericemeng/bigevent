import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login/login.vue'
import Regist from '@/views/register/regist.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/regist',
    component: Regist
  }
]

const router = new VueRouter({
  routes
})

export default router
