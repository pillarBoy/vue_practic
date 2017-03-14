import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../pages/HomePage'
import Flex from '../pages/Flex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/flex',
      name: 'flex',
      component: Flex
    },
    {
      path: '/demo',
      name: 'demo',
      component: resolve => require(['../pages/FlexLayoutBox'], resolve)
    }
  ]
})
