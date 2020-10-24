import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home'
import Index from '../pages/index'

Vue.use(VueRouter)
const routes = [
  //index, product, detail都需要相同的header,footer。所以设置同一个根路径
  {
    path: '/',
    name: 'home',
    component: Home,
    // redirect: '/index',
    children: [
      {
        path: '/index',
        name: "index",
        component: Index
      },
      {
        path: '/product/:id',
        name: "product",
        component: () => import("../pages/product")
      },
      {
        path: '/detail/:id',
        name: "detail",
        component: () => import("../pages/detail")
      },
    ]
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import("../pages/cart")
  },
  {
    path: '/order',
    name: 'order',
    component: () => import("../pages/order"),
    children: [
      {
        path: '/confirm',
        name: 'confirm',
        component: () => import("../pages/orderConfirm")
      },
      {
        path: '/pay',
        name: 'pay',
        component: () => import("../pages/orderPay")
      },
      {
        path: '/list',
        name: 'list',
        component: () => import("../pages/orderList")
      },
    ]
  },
]


const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})


export default router
