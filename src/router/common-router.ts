import { RouteRecordRaw } from 'vue-router'
import _401Page from '../pages/error/401.vue'
import _404Page from '../pages/error/404.vue'
import _500Page from '../pages/error/500.vue'
import BasicMain from '../layout/basic-main.vue'
import Home from '../pages/home.vue'
import About from '../pages/about.vue'

const routers: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Index',
    meta: {
      hideInMenu: false,
      requireAuth: false
    },
    component: BasicMain,
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => Home,
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: BasicMain,
    children: [
      {
        path: '/about/index',
        name: 'AboutIndex',
        component: About
      }
    ]
  },
  {
    path: '/401',
    name: 'error_401',
    component: _401Page
  },
  {
    path: '/500',
    name: 'error_500',
    component: _500Page
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'error_404',
    component: _404Page
  }
]

export default routers
