import Vue from 'vue'
import Vuex from 'vuex'
import Cookie from 'js-cookie'

import img01 from '../assets/cards/01.png'
import img02 from '../assets/cards/02.png'
import img03 from '../assets/cards/03.png'
import img04 from '../assets/cards/04.png'
import img05 from '../assets/cards/05.png'
import img06 from '../assets/cards/06.png'
import img07 from '../assets/cards/07.png'
import img08 from '../assets/cards/08.png'

const CONTENT_BLOCKS = [
  { id: 'c1', img: img01, name: '主席要闻' },
  { id: 'c2', img: img02, name: '我的看板' },
  { id: 'c3', img: img03, name: '训练靶场' },
  { id: 'c4', img: img04, name: '我的目录' },
  { id: 'c5', img: img05, name: '资源列表' },
  { id: 'c6', img: img06, name: '消息推荐' },  
  { id: 'c7', img: img07, name: '专业支撑' },
  { id: 'c8', img: img08, name: '状态展示', hideName: true },
]

// 模板布局数据，集成时要换成从后端读取到的数据
const LAYOUTS = [
  { id: 'layout1', name: '默认模板1', active: true, grids: [
    { x: 1, y: 1, w: 4, h: 3, content: CONTENT_BLOCKS[0] },
    { x: 5, y: 1, w: 5, h: 3, content: CONTENT_BLOCKS[1] },
    { x: 10, y: 1, w: 3, h: 2, content: CONTENT_BLOCKS[2] },

    { x: 1, y: 4, w: 4, h: 4, content: CONTENT_BLOCKS[3] },
    { x: 5, y: 4, w: 5, h: 4, content: CONTENT_BLOCKS[4] },
    { x: 10, y: 3, w: 3, h: 4, content: CONTENT_BLOCKS[5] },
    { x: 10, y: 7, w: 3, h: 1, content: CONTENT_BLOCKS[6] },

    { x: 1, y: 8, w: 12, h: 1, content: CONTENT_BLOCKS[7] },
  ] },

  { id: 'layout2', name: '默认模板2', grids: [
    { x: 1, y: 1, w: 6, h: 4 },
    { x: 7, y: 1, w: 6, h: 4 },
    { x: 1, y: 5, w: 6, h: 4 },
    { x: 7, y: 5, w: 6, h: 4 },
  ] },

  { id: 'layout3', name: '李 - 指挥模块', grids: [
    { x: 1, y: 1, w: 4, h: 3 },
    { x: 5, y: 1, w: 5, h: 3 },
    { x: 10, y: 1, w: 3, h: 3 },

    { x: 1, y: 4, w: 4, h: 1 },
    { x: 5, y: 4, w: 5, h: 4 },
    { x: 10, y: 4, w: 3, h: 4 },
    { x: 1, y: 5, w: 4, h: 3 },

    { x: 1, y: 8, w: 12, h: 1 },
  ] }
]

Vue.use(Vuex);

class Layout {
  constructor ({ id, name, grids, active }) {
    this.id = id
    this.name = name
    this.grids = grids
    this.active = !!active
  }
}

export default new Vuex.Store({
  state: {
    token: '',
    userName: '',
    layouts: [
      new Layout(LAYOUTS[0]),
      new Layout(LAYOUTS[1]),
      new Layout(LAYOUTS[2]),
    ],
    contentBlocks: CONTENT_BLOCKS
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
    },

    chooseLayout (state, id) {
      state.layouts.forEach(l => {
        l.active = l.id === id ? true : false
      })
    }
  },
  actions: {}
})
