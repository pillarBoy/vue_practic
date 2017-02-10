<template lang="html">
  <div class="">
    homePage
    {{msg}}
    <router-link to='about'>about</router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'home page'
    }
  }
}
</script>
