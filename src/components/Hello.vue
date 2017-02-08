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
