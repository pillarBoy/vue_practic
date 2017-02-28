import Vue from 'vue'

const filters = Vue.filter('to-upper-case', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.toUpperCase()
  // return value.charAt(0).toUpperCase() + value.slice(1)
})

export default filters
