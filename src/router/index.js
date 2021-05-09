import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import { routers } from './routers';

import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css'; // progress bar style

NProgress.configure({ 
  showSpinner: false 
});
Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: routers,
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  // 防止刷新后vuex里丢失token
  store.commit('getToken');
  store.commit('getUserName');
  let token = store.state.token
  // 过滤登录页，防止死循环
  if (!token && to.name !== 'login') {
    next({ name: 'login' });
    NProgress.done();
  } else {
    next();
    NProgress.done();
  }
})
export default router;