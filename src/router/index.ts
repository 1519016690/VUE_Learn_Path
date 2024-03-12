import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import index_head from '@/views/index_head.vue'
import A_0312 from '@/views/A_0311.vue'
import Map_box_view from '../views/Map_box_view.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: index_head
  },
  {
    path: '/Map_box_view',
    name: 'Map_box_view',
    component: Map_box_view
  },
  {
    path: '/A0311',
    name: 'A0311',
    component: A_0312
  },
  {
    path: '/about',
    name: 'about',    
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
