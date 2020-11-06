import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css';
import { Message, Loading, Pagination } from 'element-ui';

Vue.use(Loading.directive);
Vue.use(Pagination);

Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };
Vue.prototype.$message = Message;
Vue.prototype.$loading = Loading.service;

// loading的配置
// Loading.service({ customClass: "loading" });