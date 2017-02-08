import Vue from 'vue'
import Vuex from 'vuex'
// import actions from './actions'
import mutations from './mutations'
import actions from './actions'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [],
    count: 0
  },
  actions,
  mutations
})
