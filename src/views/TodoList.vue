<template lang="html">
  <div id="todo-list">
    <div>
      <h1 v-bind:class='{ "animated swing": isActive}'>run</h1>
      <transition
        enter-active-class='animated bounceIn'
        leave-active-class='animated bounceOutDown'
        >
        <h1 v-if='isActive'>transition test</h1>
      </transition>
      <p>{{count}}</p>
      <button type="button" v-on:click='addCount'>add_count</button>
    </div>
    <hr>
    <div class="data-source">
      <input type="text" v-on:keydown='addVal' v-model='valueI' placeholder="input the value you need to add-to the list">
      <button type="button" v-on:click='addVal'>ADD</button>
    </div>
    <hr>
    <ul class="show-list">
      <li v-for='item in items'><label><span><input type="checkbox" name="" value=""></span>{{item}}</label></li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import * as mut from '../store/types'
export default {
  computed: {
    count: function () {
      return this.$store.state.count
    },
    items: function () {
      return this.$store.state.items
    }
  },
  methods: {
    ...mapActions({
      makeAction: 'addItem'
    }),
    addVal: function (event) {
      let value = this.valueI.trim()
      if (event.keyCode === 13 || event.target.nodeName === 'BUTTON') {
        if (value) {
          // this.$store.commit(mut.ADD_ITEM, [value])
          // this.$store.dispatch({
          //   type: 'addItem',
          //   payload: [value]
          // })
          this.makeAction({
            type: 'addItem',
            payload: [value]
          })
          console.log('change')

          this.valueI = ''
        }
      }
    },
    addCount: function () {
      console.log(this.isActive)
      this.isActive = !this.isActive
      this.$store.commit(mut.ADD_COUNT)
    }
  },
  data: function () {
    return {
      valueI: '',
      isActive: false
    }
  }
}

</script>

<style lang="css">

  #todo-list {
    h1 {
      text-align: center;
    }
    ul.show-list {
      line-height: 30px;
      font-size: 20px;
      font-weight: 600;
      li {
          border-bottom: 1px solid #ccc;
      }
    }
  }
</style>
