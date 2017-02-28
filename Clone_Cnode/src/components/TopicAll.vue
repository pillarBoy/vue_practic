<template lang="html">
  <div id="all-tab">
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
