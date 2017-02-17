<template lang="html">
  <div id="main-nav">
    <div class="active">home</div>
    <div>msg</div>
    <div>publishi</div>
    <div>userCenter</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'nav page'
    }
  }
}
</script>

<style lang="css">
@import '../style/index.css';
  #main-nav {
    display: flex;
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 0px;
    height: 2.5rem;
    line-height: 2.5rem;
    z-index: 2;
    color: $fontColor;
    background-color: $baseBackColor;

    div {
      width: 25%;
      text-align: center;
      border-right: 1px solid $singleBorder;
      font-weight: $fontSize16;

      &:last-child {
        border-right: 0px;
      }
    }
  }
</style>
