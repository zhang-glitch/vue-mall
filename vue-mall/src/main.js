import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import router from './route/index'


//将axios挂载到vue实例上，以后通过this.axios发送请求。
Vue.use(VueAxios, axios)
// 加载mockjs
// const mock = true;
// if (mock) {
//   require("./mock/api")
// }

// 请求处理
axios.defaults.baseURL = "/api"
axios.defaults.timeout = 8000
axios.interceptors.response.use((response) => {
  // console.log(response)
  let res = response.data
  let status = res.status
  if (status === 0) {
    return res.data
  } else if (status === 10) {
    // 未登录跳转到登录页面
    window.location.href = "/login";
  } else {
    return res.msg
  }
})
Vue.config.productionTip = false
Vue.use(VueLazyLoad, {
  loading: "/imgs/loading-svg/loading-bars.svg"
})

Vue.use(VueCookie)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
