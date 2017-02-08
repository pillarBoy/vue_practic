import * as types from '../types'

export default {
  [types.ADD_ITEM] (state, payload) {
    state.items = [...state.items, ...payload]
  },
  [types.ADD_COUNT] (state) {
    state.count++
  }
}
