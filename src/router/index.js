import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home.vue'
/*import LoginView from '../views/login.vue'
import SearchView from '../views/nakama-search.vue'
import ProfileView from '../views/nakama-profile.vue'
import AddPersonView from '../views/nakama-add-person.vue'
import TestView from '../views/basepage.vue'*/

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },/*
    {
      path: '/test',
      name: 'test',
      component: TestView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    },
    {
      path: '/addperson',
      name: 'addperson',
      component: AddPersonView
    }/*
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }*/
  ]
})

export default router
