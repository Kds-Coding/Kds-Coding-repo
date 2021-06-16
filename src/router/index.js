import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

//Algorithm pages
import Algo from '@/views/algorithm/Algo.vue'
import AlgoCourse1 from '@/views/algorithm/AlgoCourse1.vue'

//Web pages
import Web from '@/views/web_development/Web.vue'
import WebCourse1 from '@/views/web_development/WebCourse1.vue'
import WebCourse3 from '@/views/web_development/WebCourse3.vue'

//Other pages

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
  },
  {
    path: '/web',
    name: 'Web',
    component: Web,
  }, 
  {
    path: '/web/course1',
    name: 'Course1',
    component: WebCourse1,
  },
   {
    path: '/web/course3',
    name: 'Chapitre 3',
    component: WebCourse3,
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  
 
 
})

export default router
