import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './route/index'


//将axios挂载到vue实例上，以后通过this.axios发送请求。
Vue.use(VueAxios, axios)
// 请求处理
axios.defaults.baseURL = "/api"
axios.defaults.timeout = 8000
axios.interceptors.response.use((response) => {
  let status = response.status
  let res = response.data
  if (status === 0) {
    return res.date
  } else if (status === 10) {
    // 未登录跳转到登录页面
    window.location.href = "/login";
  } else {
    return res.msg
  }
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
