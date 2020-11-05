import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import router from './route'
import store from './store'


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
  let path = location.pathname
  if (status === 0) {
    return res.data
  } else if (status === 10) {
    // 未登录跳转到登录页面
    if (path != "/index" || "/register") {
      window.location.href = "/login";
    }
    return Promise.reject(res);
  } else {
    return Promise.reject(res);
  }
})
Vue.config.productionTip = false
Vue.use(VueLazyLoad, {
  loading: "/imgs/loading-svg/loading-bars.svg"
})

Vue.use(VueCookie)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
