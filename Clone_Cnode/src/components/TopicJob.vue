<template lang="html">
  <div id="job">
    <TopicList />
  </div>
</template>

<script>
import '../style/index.scss'
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
