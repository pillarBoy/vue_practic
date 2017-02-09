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
  </div>
</template>

<script>
// import CircleMenu from 'vue-circle-menu'
export default {
  // components: {
  //   CircleMenu
  // },
  data () {
    return {
      sm: 'about page',
      isActive: true
    }
  }
}
</script>
<style media="screen">

</style>
