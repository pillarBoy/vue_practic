<template lang="html">
  <div class="">
    <button @click='alr'>test</button>
  </div>
</template>

<script>
export default {
  props: ['ems'],
  methods: {
    alr () {
      console.log(1)
      this.$emit('alrTest', 5)
    }
  }
}
</script>

<style lang="css">
button {
  line-height: 1rem;
  padding: 1rem;
  font-size: .8rem;
  background-color: green;
}
</style>
