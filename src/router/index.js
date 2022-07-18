import { createRouter, createWebHashHistory } from 'vue-router'

import layout from '@/layout'

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
    redirect: '/index',
    component: layout,
    children: [
      {
        path: '/index',
        name: 'index',
        component: () => import('../views/home'),
        meta: {
          title: '后台首页'
        }
      },
      {
        path: '/goods/list',
        name: 'goods/list',
        component: () => import('../views/goods-list'),
        meta: {
          title: '商品管理'
        }
      },
      {
        path: '/access/list',
        name: 'access/list',
        component: () => import('../views/access-list'),
        meta: {
          title: '权限管理'
        }
      },
      {
        path: '/category/list',
        name: 'category/list',
        component: () => import('../views/category-list'),
        meta: {
          title: '分类管理'
        }
      },
      {
        path: '/comment/list',
        name: 'comment/list',
        component: () => import('../views/comment-list'),
        meta: {
          title: '评论管理'
        }
      },
      {
        path: '/coupon/list',
        name: 'coupon/list',
        component: () => import('../views/coupon-list'),
        meta: {
          title: '优惠券管理'
        }
      },
      {
        path: '/distribution/index',
        name: 'distribution/index',
        component: () => import('../views/distribution-index'),
        meta: {
          title: '分销员管理'
        }
      },
      {
        path: '/distribution/setting',
        name: 'distribution/setting',
        component: () => import('../views/distribution-setting'),
        meta: {
          title: '分销设置'
        }
      },
      {
        path: '/goods/list',
        name: 'goods/list',
        component: () => import('../views/goods-list'),
        meta: {
          title: '商品管理'
        }
      },
      {
        path: '/image/list',
        name: 'image/list',
        component: () => import('../views/image-list'),
        meta: {
          title: '图片管理'
        }
      },
      {
        path: '/level/list',
        name: 'level/list',
        component: () => import('../views/level-list'),
        meta: {
          title: '会员等级'
        }
      },
      {
        path: '/manager/list',
        name: 'manager/list',
        component: () => import('../views/manager-list'),
        meta: {
          title: '管理员管理'
        }
      },
      {
        path: '/notice/list',
        name: 'notice/list',
        component: () => import('../views/notice-list'),
        meta: {
          title: '公告管理'
        }
      },
      {
        path: '/order/list',
        name: 'order/list',
        component: () => import('../views/order-list'),
        meta: {
          title: '订单管理'
        }
      },
      {
        path: '/role/list',
        name: 'role/list',
        component: () => import('../views/role-list'),
        meta: {
          title: '角色管理'
        }
      },
      {
        path: '/setting/base',
        name: 'setting/base',
        component: () => import('../views/setting-base'),
        meta: {
          title: '基础设置'
        }
      },
      {
        path: '/setting/buy',
        name: 'setting/buy',
        component: () => import('../views/setting-buy'),
        meta: {
          title: '交易设置'
        }
      },
      {
        path: '/setting/ship',
        name: 'setting/ship',
        component: () => import('../views/setting-ship'),
        meta: {
          title: '物流设置'
        }
      },
      {
        path: '/skus/list',
        name: 'skus/list',
        component: () => import('../views/skus-list'),
        meta: {
          title: '规格管理'
        }
      },
      {
        path: '/user/list',
        name: 'user/list',
        component: () => import('../views/user-list'),
        meta: {
          title: '用户管理'
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
