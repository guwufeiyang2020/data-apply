import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './icons';
import './utils/rem';
// 全局配置
import './assets/scss/index.scss';
import "element-ui/lib/theme-chalk/index.css"; 

import { Message } from 'element-ui'
import http from '@/api/config'

http.defaults.baseURL = '/api';

Vue.config.productionTip = false;
Vue.prototype.$message = Message;

import ElementUI from 'element-ui';
Vue.use(ElementUI);
Vue.prototype.$http = http;

const mock = true;
if(mock){
  require('./mock/api');
}

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

