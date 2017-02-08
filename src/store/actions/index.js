//
// export const addItem = ({ commit }) => {
//   commit('ADD_ITEM')
// }
import * as types from '../types'

export default {
  addItem: ({commit}, args) => {
    console.log(args)
    commit(types.ADD_ITEM, args.payload)
  }
}
