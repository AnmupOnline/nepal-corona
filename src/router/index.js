import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/pages/Dashboard'
import news from '@/pages/news'
import Infected from '@/pages/Infected'
// import Maps from '@/pages/Maps'
import BadGateway from '@/pages/BadGateway'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      props: { page: 1 },
      alias: '/'
    },
    {
      path: '/news',
      name: 'News',
      props: { page: 2 },
      component: news
    },
    {
      path: '/nepalese',
      name: 'Infected Nepalese',
      props: { page: 3 },
      component: Infected
    },
    {
      path: '/404',
      name: 'BadGateway',
      props: { page: 5 },
      component: BadGateway
    },
    {
      path: '*',
      props: { page: 5 },
      redirect: '/404'
    }
  ]
})
