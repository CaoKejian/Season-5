import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

// 把这段代码直接粘贴到router/index.js中的Vue.use(VueRouter)之前
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function (location) {
  return originalPush.call(this, location).catch(err => { })
};
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:"/home"
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/user',
    component: () => import(/* webpackChunkName: "User" */ '../views/User.vue')
  }
  ,
  {
    path: '/goods',
    component: () => import(/* webpackChunkName: "Goods" */ '../views/Goods.vue')
  }
  ,
  {
    path: '/shopcart',
    component: () => import(/* webpackChunkName: "Shopcart" */ '../views/Shopcart.vue')
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
