<template lang="html">
  <div class="">
    <TopicList />
  </div>
</template>

<script>
import TopicList from './TopicList'

export default {
  data () {
    return {
      msg: 'job'
    }
  },
  components: {
    TopicList: TopicList
  }
}
</script>

<style lang="css">
</style>
