import Vue from 'vue'
import Router from 'vue-router'
import DateComponent from 'components/DateComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dateC',
      component: DateComponent
    }
  ]
})
