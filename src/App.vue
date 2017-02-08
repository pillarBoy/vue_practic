<template>
  <div id="app">
    <div class="inlineBlock nav-tab">
      <NavTab />
    </div>
    <div class="inlineBlock main-view">
      <transition name="zoom" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script type="text/javascript">
import 'animate.css'
import NavTab from './components/NavTab.vue'
export default {
  components: {
    NavTab
  },
  methods: {

  },
  data: function () {
    return {
      addClass: ''
    }
  }
}
</script>

<style>
ul, li, dl, dd, dt {}
.clearfix {
  &:after {
    content: "";
    display: table;
    clear: both;
    height: 0;
    font-size: 0;
    visibility: hidden;
  }
}
.lf {
  float: left;
}
div {
  box-sizing: border-box;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;

  &>div {
    position: absolute;
    top: 0;
    bottom: 0;
  }
  .nav-tab {
    left: 0;
    right: 75%;
    border-right: 5px solid #ccc;
  }

  .main-view {
    left: 25%;
    right: 0;
    padding: 10px;
    overflow-y: auto;
  }

}
@keyframes zoomInLeft {
  from {
    opacity: 0;
    -webkit-transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);
    transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);
    transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
}

.zoom-enter-active {
  -webkit-animation-name: zoomInLeft;
  animation-name: zoomInLeft;
}


</style>
