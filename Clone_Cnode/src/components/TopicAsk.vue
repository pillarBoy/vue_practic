<template lang="html">
  <div id='ask-tab'>
    <TopicList />
  </div>
</template>

<script>
import TopicList from './TopicList'

export default {
  data () {
    return {
      msg: 'ask'
    }
  },
  components: {
    TopicList: TopicList
  }
}
</script>

<style lang="css">

</style>
