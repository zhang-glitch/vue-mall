import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { Message } from 'element-ui';

Vue.use(ElementUI);

Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };
Vue.prototype.$message = Message;