import Main from '../pages/main'
import Index from '../pages/index'

export const routers = [
  {
    path:'/',
    name: 'main',
    component: Main,
    redirect: '/index',
    children:[
      {
        path: '/index',
        name: 'index',
        component: Index,
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../pages/login.vue')
  },
]