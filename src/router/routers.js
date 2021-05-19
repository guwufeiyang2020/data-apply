import Main from '../pages/main'
import Index from '../pages/index/index.vue'

export const routers = [
  {
    path: '/',
    name: 'main',
    component: Main,
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'index',
        component: Index,
      }, 
      {
        path: '/apply/apply1',
        name: 'apply1',
        component: () => import('../pages/apply/apply1.vue')
      },
      {
        path: '/apply/apply2',
        name: 'apply2',
        component: () => import('../pages/apply/apply2.vue')
      },
      {
        path: '/resouce',
        name: 'resouce',
        component: () => import('../pages/resouce.vue')
      },
      {
        path: '/model',
        name: 'model',
        component: () => import('../pages/model.vue')
      },
      {
        path: '/search',
        name: 'search',
        component: () => import('../pages/search.vue')
      },
      {
        path: '/detail/:id',
        name: 'detail',
        component: () => import('../pages/detail.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../pages/login.vue')
  },
]