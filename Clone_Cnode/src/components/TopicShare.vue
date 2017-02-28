<template lang="html">
  <div id="share">
    <TopicList />
  </div>
</template>

<script>
import TopicList from './TopicList'

export default {
  data () {
    return {
      msg: 'share'
    }
  },
  components: {
    TopicList: TopicList
  }
}
</script>

<style lang="css">

</style>
