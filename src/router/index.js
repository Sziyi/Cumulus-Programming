import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login'),
    meta: {
      title: '登录页'
    }
  },
  {
    path: '/',
    name: 'layout',
    redirect: '/home',
    component: () => import('../layout'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/home'),
        meta: {
          title: '后台首页'
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
