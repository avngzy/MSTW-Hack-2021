import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import User from '../views/User.vue'
import IndividualSME from '../views/IndividualSME.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is vi sited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')

    component: About
  },
  {
    path: '/user/:id',
    name: 'user',
    component: User,
    props: function(route) {
      return {userId: route.params.id}
    }
  },
  {
    path: '/sme/:id',
    name: 'sme',
    component: IndividualSME
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
