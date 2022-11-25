import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

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
  },
  {
    path: '/details',
    component: () => import(/* webpackChunkName: "details" */ '../views/Details.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

// 全局导航首位 路由拦截
// router.beforeEach((to,from,next)=>{
//   if(to.path ==='/user'){
//     let token = localStorage.getItem("x-auth-token")
//     if(token){
//       next()
//     }else{
//       store.dispatch("toastStatus/asyncChanIsShowToast",{
//         msg:'请先登录',
//         type:"warning",
//       })
//     }
//     return
//   }
//   next()

// })

export default router
