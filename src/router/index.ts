import { createRouter, createWebHistory, Router, RouteRecordRaw } from 'vue-router'
import CommonRouter from './common-router'

let routers: RouteRecordRaw[] = []

routers.push(...CommonRouter)
const router: Router = createRouter({
  history: createWebHistory(),
  routes: routers
})

export default router
