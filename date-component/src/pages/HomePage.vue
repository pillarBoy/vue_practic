<template lang="html">
  <div class="">
    <h1>home page</h1>
    <h1></h1>
    <DateComponent :default-time='defaultTime' v-on:getDate='changeTime'/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      defaultTime: '2017-05-06'
    }
  },
  methods: {
    calendar: function () {
      this.show = !this.show
    },
    changeTime: function (time) {
      console.log(time)
    }
  }
}
</script>

<style lang="css">
</style>
