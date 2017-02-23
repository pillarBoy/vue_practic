<template lang="html">
  <div id='view'>
    <div class='container' ref='container'>
      <img v-for='item in imageDatas' :src="item" alt="">
    </div>
  </div>
</template>

<script>
export default {
  props: ['images'],
  data () {
    return {
      msg: 'slider',
      IMG_WIDTH: 0,
      IMG_HEIGHT: 0,
      DURATION: 0,
      STEPS: 50,
      INTERVAL: 0, // 移动 单位时间
      UNIT_LENGTH: 0,
      WAIT_TIME: 3000,
      imageDatas: this.images,
      moved: 0,
      timer: null
    }
  },
  mounted () {
    this.init()
  },
  beforeDestroy () {
    clearTimeout(this.timer)
  },
  methods: {
    init () {
      // 初始化 容器 style width
      this.IMG_HEIGHT = parseInt(window.getComputedStyle(this.$el).height)
      this.IMG_WIDTH = parseInt(window.getComputedStyle(this.$el).width)
      this.$refs.container.style.width = this.IMG_WIDTH * this.imageDatas.length + 'px'
      this.INTERVAL = this.DURATION / this.STEPS
      this.UNIT_LENGTH = this.IMG_WIDTH / this.STEPS
      this.autoPlay()
    },
    //
    // 移动 1张图片
    playAnimation () {
      let left = parseInt(window.getComputedStyle(this.$refs.container).left)
      this.$refs.container.style.left = left - this.UNIT_LENGTH + 'px'
      this.moved++
      if (this.moved < this.STEPS) {
        this.timer = setTimeout(() => this.playAnimation(), this.INTERVAL)
      } else {
        clearTimeout(this.timer)
        this.timer = null
        this.moved = 0
        // 恢复 位置
        this.$refs.container.style.left = ''
        this.imageDatas = this.imageDatas.concat(this.imageDatas.splice(0, 1))
        this.autoPlay()
      }
    },
    autoPlay () {
      this.timer = setTimeout(() => this.playAnimation(), this.WAIT_TIME)
    }
  }
}
</script>

<style lang="css">
  #view {
    /*position: relative;
    margin: 30px auto;
    width: 302px;
    height: 202px;
    border: 1px solid #ccc;
    overflow: hidden;*/

    .container {
      position: absolute;
      left: 0px;
      top: 0px;
      bottom: 0px;

      img {
        width: 300px;
        height: 200px;
      }
    }
  }
</style>
