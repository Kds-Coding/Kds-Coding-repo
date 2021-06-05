import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Algo from '@/views/Algo.vue'
import AlgoCourse1 from '@/views/AlgoCourse1.vue'

import About from '@/views/About.vue'
import NotFound from '@/views/NotFound.vue'



const routes = [
  {
    path: '/',
    name: 'Home',
    component:Home ,
  },
  
  {
    path: '/about',
    name: 'About',
    component: About
    },
  
    {
      path: '/algo',
      name: 'Algorithme',
      component: Algo
      },
      {
      path: '/algo/Course1',
      name: 'Cours 1 - Algo',
      component: AlgoCourse1
      },
  {
    path: '/notfound',
    name: 'NotFound',
    component: NotFound,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
