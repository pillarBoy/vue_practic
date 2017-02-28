import Vue from 'vue'
import VueRouter from 'vue-router'
import infiniteScroll from 'vue-infinite-scroll'
import routes from './routes'
import filters from './filters'
// 初始化 window html font-size rem , initial-scale
var dpr, rem, scale
var docEl = document.documentElement
var fontEl = document.createElement('style')
var metaEl = document.querySelector('meta[name="viewport"]')
dpr = window.devicePixelRatio || 1
scale = 1 / dpr
rem = docEl.clientWidth * dpr / 10
// 设置viewport，进行缩放，达到高清效果
metaEl.setAttribute('content', `initial-scale=${scale}, maximum-scale=${scale}, minimum-scale=${scale}, user-scalable=no`)
// 'width=' + dpr * docEl.clientWidth +
//   ', initial-scale=' + scale + ', maximum-scale=' + scale +
//   ', minimum-scale=' + scale + ', user-scalable=no')
// 设置data-dpr属性，留作的css hack之用
docEl.setAttribute('data-dpr', dpr)
// 动态写入样式
docEl.firstElementChild.appendChild(fontEl)
fontEl.innerHTML = 'html{font-size:' + rem + 'px!important}'
// 给js调用的，某一dpr下rem和px之间的转换函数
window.rem2px = function (v) {
  return parseFloat(v) * rem
}
window.px2rem = function (v) {
  v = parseFloat(v)
  return v / rem
}
window.dpr = dpr
window.rem = rem

Vue.use(VueRouter)
Vue.use(infiniteScroll)

/* eslint-disable no-new */
const router = new VueRouter({
  routes
})

// Vue.filter('to-upper-case', function (value) {
//   console.log(value)
//   if (!value) return ''
//   value = value.toString()
//   return value.toUpperCase()
//   // return value.charAt(0).toUpperCase() + value.slice(1)
// })

// Vue.filter({
//   'filter-a': function (value) {
//     if (!value) return ''
//     value = value.toString()
//     return value.charAt(0).toUpperCase() + value.slice(1)
//   }
// })

new Vue({
  router,
  filters,
  template: '<router-view><router-view>'
}).$mount('#root')
// document.getElementById('root').appendChild(app)
