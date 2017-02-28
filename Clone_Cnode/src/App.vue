<template>
  <div id="app">
    <!-- <router-view></router-view> -->
    <transition
    name="zoom"
    mode="out-in"
    >
      <router-view></router-view>
    </transition>
    <NavPage />
  </div>
</template>

<script>
import 'animate.css'
import './app.scss'
import NavPage from './components/navComponent/NavComponent'

export default {
  data () {
    return {}
  },
  methods: {},
  components: {
    NavPage: NavPage
  }
}
</script>

<style>
body,h1,h2,h3,h4,h5,h6,p,a{}
li,dl,dd,dt {
  list-style: none;
}
a{
  text-decoration: none;
}
div,p,span {
  box-sizing: border-box;
}
button {
  border: none;
  background-color: transparent;
}
.clear-fixed {
  &:after {
    content: '';
    display: table;
    clear: both;
    height: 0px;
    font-size: 0px;
  }
}
</style>
