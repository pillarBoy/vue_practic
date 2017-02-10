<template lang="html">
  <div id="left-tab-contain">
    <ul>
      <li v-for='item in routes'>
        <router-link active-class='active' :to='item.path'>{{item.component}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      routes: [
        {
          path: '/home',
          component: 'home'
        },
        {
          path: '/about',
          component: 'about'
        },
        {
          path: '/list',
          component: 'TodoList'
        }
      ]
    }
  }
}
</script>
<style lang='css'>
  #left-tab-contain {
    ul {
      width: 80%;
      margin: 0 auto;
      line-height: 28px;
      li {
        .active {
          color: green;
        }
      }
    }
  }
</style>
