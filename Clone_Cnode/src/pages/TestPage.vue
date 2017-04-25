<template lang="html">
  <div class="">
    {{test}}
    <test-emit v-on:alrTest='alrTest'></test-emit>
  </div>
</template>

<script>
import TestEmit from '../components/TestEmit'

export default {
  data () {
    return {
      test: 'test'
    }
  },
  components: {
    TestEmit
  },
  methods: {
    alrTest (id) {
      console.log(`parent run ${id}`)
    }
  }
}
</script>

<style lang="css">
</style>
