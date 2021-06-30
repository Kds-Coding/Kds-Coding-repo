import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'

import WorkInProgress from '@/views/WorkInProgress.vue'
//Algorithm pages
import Algo from '@/views/algorithm/Algo.vue'
import AlgoCourse1 from '@/views/algorithm/AlgoCourse1.vue'
import AlgoCourse2 from '@/views/algorithm/AlgoCourse2.vue'

import Algo4Exo from '@/views/algorithm/Algo4Exo.vue'

import AlgoCourse4 from '@/views/algorithm/AlgoCourse4.vue'

//Web pages
import Web from '@/views/web_development/Web.vue'
import WebCourse1 from '@/views/web_development/WebCourse1.vue'
import WebCourse2 from '@/views/web_development/WebCourse2.vue'
import WebCourse3 from '@/views/web_development/WebCourse3.vue'
import Exercice1 from '@/views/web_development/exercices/Exercice1.vue'
import Exercice2 from '@/views/web_development/exercices/Exercice2.vue'
import Exercice3 from '@/views/web_development/exercices/Exercice3.vue'

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
  },{
    path: '/algo/Course3',
    name: 'Cours 3 - Les types de données',
    component: WorkInProgress
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
    path: '/:catchAll(.*)',
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
    name: 'Chapitre 1',
    component: WebCourse1,
  },
  {
    path: '/web/course2',
    name: 'Chapitre 2',
    component: WebCourse2,
  },
  {
    path: '/web/course3',
    name: 'Chapitre 3',
    component: WebCourse3,
  },
  {
    path: '/web/exercice1',
    name: 'chapitre 1 : texte à trou',
    component: Exercice1,
  },
  {
    path: '/web/exercice2',
    name: 'chapitre 2 : texte à trou',
    component: Exercice2,
  },
  {
    path: '/web/exercice3',
    name: 'chapitre 3 : texte à trou',
    component: Exercice3,
  },
  {
    path: '/obj',
    name: 'Développement objet ',
    component: WorkInProgress,
  },
  {
    path: '/obj/course1',
    name: 'Exercice 2 ',
    component: WorkInProgress,
  },
  {
    path: '/obj/course2',
    name: 'Exercice 2 ',
    component: WorkInProgress,
  },
  {
    path: '/obj/course3',
    name: 'Exercice 3 ',
    component: WorkInProgress,
  }
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
