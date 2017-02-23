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
      msg: 'all'
    }
  },
  components: {
    TopicList: TopicList
  }
}
</script>

<style lang="css">
</style>
