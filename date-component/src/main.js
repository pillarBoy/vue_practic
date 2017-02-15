// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

/* eslint-disable no-new */
// import myDir from './directive/myDir'
import DateComponent from 'components/DateComponent'
//
// Vue.directive('my-dir', myDir)
// Vue.directive('date-test', DateTest)
Vue.component('DateComponent', DateComponent)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
