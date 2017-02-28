<template lang="html">
  <div id='good-tab'>
    <TopicList />
  </div>
</template>

<script>
import TopicList from './TopicList'

export default {
  data () {
    return {
      msg: 'good'
    }
  },
  components: {
    TopicList: TopicList
  }
}
</script>

<style lang="css">

</style>
