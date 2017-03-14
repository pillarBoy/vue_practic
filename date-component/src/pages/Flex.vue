<template lang="html">
  <div id='flex_test'>
    {{msg}}
    <div class="comment test" flex='dir:left box:first'>
      <div class="">1</div>
      <div class="">2</div>
      <div class="">3</div>
    </div>
    <div class="comment test2" flex='dir:top'>
      <div class="" flex-box='0'>1</div>
      <div class="" flex-box='1'>2</div>
      <div class="" flex-box='2'>3</div>
    </div>
  </div>
</template>

<script>
import 'flex.css'
export default {
  data () {
    return {
      msg: 'msg'
    }
  }
}
</script>

<style lang="css">
#flex_test{
  .comment {
    div{
      border: 1px solid #ccc;
    }
  }
  .test {
    div {
      &:nth-child(1) {
        width: 60px;
      }
    }
  }
  .test2 {
    height: 100px;
  }

}
</style>
