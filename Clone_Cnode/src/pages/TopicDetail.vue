<template lang="html">
  <div id="details">
    <header>
      <button type="button" name="button" @click='$router.go(-1)'>返回</button>
    </header>
    <div class="content">
      <hr>
      <h2>author: {{details.author.loginname}}</h2>
      <h2>{{details.title}}</h2>
      <div v-html='details.content'></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'topic',
      details: {
        existence: true,
        id: '',
        author_id: '',
        tab: 'share',
        content: '',
        title: '',
        last_reply_at: '',
        good: false,
        top: false,
        reply_count: 0,
        visit_count: 0,
        create_at: '',
        author: {},
        replies: [],
        is_collect: false
      }
    }
  },
  mounted () {
    this.getTopicDetail()
  },
  methods: {
    getTopicDetail: function () {
      let { vid } = this.$route.params
      let url = `https://cnodejs.org/api/v1/topic/${vid}`
      fetch(url, {method: 'GET'})
        .then((req) => req.json())
        .then((json) => {
          this.$nextTick(() => {
            this.details = json.data
            console.log(this.details)
          })
        })
    }
  }
}
</script>

<style lang="css">
#details {
  width: 100%;
  height: 100%;
  overflow: auto;
  header {
    position: fixed;
  }
  .content {
    margin-top: 1.5rem;
    margin-bottom: 3rem;
    max-width: 100%;
  }
  img {
    max-width: 100%;
  }
  pre.prettyprint {
    word-wrap: normal;
    max-width: 100%;
    padding: 1.5rem;
    overflow: auto;
  }
  code {
    max-width: 100%;
    overflow: auto;
  }
}
</style>
