// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import CircleMenu from 'vue-circle-menu'
import infiniteScroll from 'vue-infinite-scroll'

import store from './store'
import routes from './route.js'
import App from './App'

Vue.use(VueRouter)
Vue.use(infiniteScroll)

const router = new VueRouter({
  routes
})
Vue.component('CircleMenu', CircleMenu)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
