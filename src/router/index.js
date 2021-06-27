import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'

//Algorithm pages
import Algo from '@/views/algorithm/Algo.vue'
import AlgoCourse1 from '@/views/algorithm/AlgoCourse1.vue'
import AlgoCourse2 from '@/views/algorithm/AlgoCourse2.vue'

import Algo4Exo from '@/views/algorithm/Algo4Exo.vue'

import AlgoCourse4 from '@/views/algorithm/AlgoCourse4.vue'

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
    component: Home,
  },

  {
    path: '/about',
    name: 'About',
    component: About
  },

  {
    path: '/login',
    name: 'login',
    component: Login
  },

  {
    path: '/register',
    name: 'register',
    component: Register
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
  }, {
    path: '/algo/Course2',
    name: 'Cours 2 - Les variables',
    component: AlgoCourse2
  },
  {
    path: '/algo/Course4',
    name: 'Cours 4 - Les boucles',
    component: AlgoCourse4
  },

  {
    path: '/algo/QuizAlgo',
    name: 'Quiz - Les boucles',
    component: Algo4Exo
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
  // Fonction wich make a scroll to the top of new page
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
  history: createWebHistory(),
  routes,




})

export default router
