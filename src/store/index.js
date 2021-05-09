import Vue from 'vue'
import Vuex from 'vuex'
import Cookie from 'js-cookie'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    userName: ''
  },
  mutations: {
    setToken(state, val) {
      state.token = val;
      Cookie.set('token', val);
    },
    clearToken(state) {
      state.token = '';
      Cookie.remove('token');
    },
    getToken(state) {
      state.token = Cookie.get('token');
    },
    setUserName(state, val) {
      state.userName = val;
      Cookie.set('userName', val);
    },
    getUserName(state) {
      state.userName = Cookie.get('userName');
    },
    clearUserName(state) {
      state.userName = '';
      Cookie.remove('userName');
    }
  },
  actions: {}
})
