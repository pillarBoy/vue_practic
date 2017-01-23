<template>
  <div class="hello">
    {{msg}}
    <br>
    <span>{{msg}}</span>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  div {
    color: green;
    span {
      color: blue;
    }
  }
</style>
