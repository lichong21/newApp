import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Welcome from '@/components/Welcome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'Login',
      redirect:'/login',
      component:Login
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect:'/welcome',
      children:[
        {
          path:'/welcome',
          name:'Welcome',
          component:Welcome
        }
      ]
    },
   
  ]
})
