import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { Message, Loading } from 'element-ui';

Vue.use(ElementUI);
Vue.use(Loading.directive);

Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };
Vue.prototype.$message = Message;
Vue.prototype.$loading = Loading.service;

// loading的配置
// Loading.service({ customClass: "loading" });