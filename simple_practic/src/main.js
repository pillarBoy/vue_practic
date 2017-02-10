// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'
import routes from './route.js'
import CircleMenu from 'vue-circle-menu'
import App from './App'

Vue.use(VueRouter)

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
