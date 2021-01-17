import { createRouter, createWebHistory } from 'vue-router'
import Create from '../views/Create.vue'

const routes = [
  {
    path: '/',
    name: 'create',
    component: () => import('../views/Create')
  },
  {
    path: '/List',
    name: 'list',
    component: () => import('../views/List.vue'),
  },
  {
    path: '/task/:id',
    name: 'task',
    component: () => import('../views/Task.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
