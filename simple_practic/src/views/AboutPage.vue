<template lang="html">
  <div class="">
    about Page
    <ul class="clearfix">
      <li class="lf">12a</li>
      <li class="lf">12b</li>
      <li class="lf">12c</li>
      <li class="lf">12d</li>
      <li class="lf">12e</li>
    </ul>
    <circle-menu class='test-circle' type="middle-around" :number='4' animate="animated swing" mask='black' btn circle>
      <a slot="item_1" class="fa fa-twitter fa-lg">1</a>
      <a slot="item_2" class="fa fa-weixin fa-lg">2</a>
      <a slot="item_3" class="fa fa-weibo fa-lg">3</a>
      <a slot="item_4" class="fa fa-github fa-lg">4</a>
    </circle-menu>
    <circle-menu type="middle-around" :number='4' animate="animated swing" mask='black' btn circle>
      <a slot="item_1" class="fa fa-twitter fa-lg">1</a>
      <a slot="item_2" class="fa fa-weixin fa-lg">2</a>
      <a slot="item_3" class="fa fa-weibo fa-lg">3</a>
      <a slot="item_4" class="fa fa-github fa-lg">4</a>
    </circle-menu>
    <h1>轮播</h1>
    <div class="" v-show='NODE_ENV'>
      asdfa
    </div>
  </div>
</template>

<script>
// import CircleMenu from 'vue-circle-menu'
// if (process.env.NODE_ENV === 'development') console.log(111)
export default {
  // components: {
  //   CircleMenu
  // },
  data () {
    return {
      NODE_ENV: process.env.NODE_ENV === 'development' ? 1 : 0,
      sm: 'about page',
      isActive: true,
      bannerEle: null,
      animateTime: '',
      completeTime: '',
      images: [require('assets/img/img01.png'), require('assets/img/img02.png'), require('assets/img/img03.png'), require('assets/img/img04.png'), require('assets/img/img05.png'), require('assets/img/img06.png')],
      parsTime: ''
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>
<style media="screen">
  #banner {
    position: relative;
    /*margin-top: 100px;*/
    margin: 100px auto;
    width: 300px;
    height: 202px;
    border: 1px solid #ccc;
    overflow: hidden;
    .container {
      position: absolute;
      left: 0px;
      top: 0px;
      bottom: 0px;
      /*right: -800px;*/
      width: 1800px;
      img {
        width: 300px;
        height: 200px;
      }
    }
    ul {
      position: absolute;
      right: 1rem;
      bottom: .6rem;
      li {
        float: left;
        margin-right: .5rem;
        width: 1.4rem;
        line-height: 1.4rem;
        background: red;
        border-radius: 50%;
        text-align: center;
        color: white;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
</style>
