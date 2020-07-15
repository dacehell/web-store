import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
   {
    path: '/notfound',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "login" */ '../views/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next)=>{
  let user = Firebase.auth().currentUser;
  let authRequired = to.matched.some(route => route.meta.login)
  if(!user && authRequired){
    next('/login')
  }else{
    next()
  }
})

export default router

