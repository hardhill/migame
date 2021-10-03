import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Login from '../views/Login.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
    meta:{

    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta:{
      layout:'Auth'
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
