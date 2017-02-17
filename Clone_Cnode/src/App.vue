<template>
  <div id="app">
    <router-view></router-view>
    <NavPage />
  </div>
</template>

<script>
import NavPage from './components/NavPage'
export default {
  data () {
    return {}
  },
  methods: {
    test_time () {

    }
  },
  components: {
    NavPage: NavPage
  }
}
</script>

<style>
@import './style/index.css';
body,h1,h2,h3,h4,h5,h6,p,a{}
li,dl,dd,dt {
  list-style: none;
}
a{
  color: $fontColor;
  text-decoration: none;
}
div,p,span {
  box-sizing: border-box;
}
#app {
  font-family: 'Microsoft YaHei', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: $fontSize;
  color: $fontColor;
  position: absolute;
  left: 0px;
  top: 0px;
  right: 0px;
  bottom: 0px;
  .active {
    font-weight: bold;
    color: $activeColor;
    background-color: $activeBackColor;
  }
}

</style>
