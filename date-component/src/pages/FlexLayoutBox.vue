<template lang="html">
  <div id="layout_demo" flex='dir:top'>
    <div class="header" flex-box='1'>header 277</div>
    <div class="content" flex-box='5'>
      content 536
    </div>
    <div class="footer">
      footer
    </div>
  </div>
</template>

<script>
import 'flex.css'
export default {
}
</script>

<style lang="css">
#layout_demo{
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  div {
    border: 1px solid #ccc;
  }
}
</style>
