<template lang="html">
  <div id='topice-list' v-infinite-scroll='getDates' infinite-scroll-disabled="busy" infinite-scroll-distance="30">
    <ul>
      <li v-for='item in datas' :key='item.id' @click='topicDetail(item)'>
        <p><b>{{item.author.loginname}}&nbsp;</b>{{item.tab}}</p>
        <h3>{{item.title}}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      threme: this.$route.query.tab !== 'all' ? this.$route.query.tab : '',
      datas: []
    }
  },
  mounted () {
    // 过渡动画结束后，infinite-scroll 不会自动调用获取数据函数了（原因未知），手动调用getDates
    // this.getDates()
    // this.$route.params
    // console.log(this.$route.query.tab)
  },
  methods: {
    getDates: function () {
      this.busy = true
      // let threme = this.$route.params
      let url = `https://cnodejs.org/api/v1/topics?tab=${this.threme}&limit=20`
      fetch(url, {
        method: 'GET'
      }).then((response) => {
        return response.json()
      }).then((json) => {
        // this.datas.push.apply(this.datas, json.data)
        // this.datas = [...this.datas, json.data]
        this.$nextTick(() => {
          // if (threme) {
          //   this.datas.length = 0
          // }
          this.datas = this.datas.concat(json.data)
        })
        this.busy = false
        // this.datas = this.datas.concat(json.data)
        console.log(json)
      })
    },
    topicDetail: function (topic) {
      console.log(topic.id)
      this.$router.push({path: '/topic/' + topic.id})
    }
  }
}
</script>

<style lang="css">
  #topice-list {
    position: absolute;
    left: 0px;
    top: 0;
    bottom: 0;
    right: 0px;
    overflow: scroll;
    ul {
      padding: 0.8rem;
      li {
        padding:  .6rem 0;
      }
    }
  }
</style>
