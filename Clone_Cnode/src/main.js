import Vue from 'vue'
import VueRouter from 'vue-router'
import infiniteScroll from 'vue-infinite-scroll'
import routes from './routes'
// import App from './App'

Vue.use(VueRouter)
Vue.use(infiniteScroll)

/* eslint-disable no-new */
const router = new VueRouter({
  routes
})

new Vue({
  router,
  template: '<router-view><router-view>'
}).$mount('#root')
// document.getElementById('root').appendChild(app)
