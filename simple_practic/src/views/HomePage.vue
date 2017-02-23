<template lang="html">
  <div class="outer">
    homePage
    {{msg}}
    <router-link to='about'>about</router-link>
    <div class="none-height">
      <div class="test">
        <!-- <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
          <div class="" v-for='item in data'>
            {{item.name}}
          </div>
        </div> -->
      </div>
    </div>
    <Slider class='test' :images='images'/>
  </div>
</template>

<script>
import Slider from '../components/Slider'
export default {
  data () {
    return {
      msg: 'home page',
      data: [],
      busy: false,
      images: [require('assets/img/img01.png'), require('assets/img/img02.png'), require('assets/img/img03.png'), require('assets/img/img04.png'), require('assets/img/img05.png'), require('assets/img/img06.png')]
    }
  },
  methods: {
  },
  components: {
    Slider: Slider
  }
}
</script>
<style media="screen">
  .outer {
    /*height: 800px;*/
    position: absolute;
    left: 0px;
    top: 0px;
    right: 0px;
    bottom: 0px;
    /*overflow: hidden;*/
    overflow: scroll;

    .none-height {
      .test {
        position: absolute;

      }
    }
    .test {
      position: relative;
      
      left: 50px;
      width: 302px;
      height: 202px;
      border: 1px solid #ccc;
      overflow: hidden;

    }
  }
</style>
