<template lang="html">
  <div id='topice-list' v-infinite-scroll='getDates' infinite-scroll-disabled="busy" infinite-scroll-distance="30">
    <ul>
      <li v-for='item in datas' :key='item.id' @click='topicDetail(item)'>
        <p><i>{{item.author.loginname}}&nbsp;</i><mark v-if='!item.top'>{{item.tab | to-upper-case}}</mark><mark v-if='item.top'>TOP</mark></p>
        <h5>{{item.title}}</h5>
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
  // beforemounted () {
  //   this.getDates()
  // },
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
      })
    },
    topicDetail: function (topic) {
      this.$router.push({path: '/topic/' + topic.id})
    }
  }
}
</script>

<style lang="css">
  #topice-list {
    ul {
      li {
        padding:  .2rem 0;
        border-bottom: 1px solid #ccc;
        p {
          &:nth-child(1) {
            line-height: .3rem;
          }
        }
        i {
          font-size: .15rem;
        }
        mark {
          float: right;
          width: 1rem;
          padding: .05rem 0;
          text-align: center;
          font-size: .3rem;
        }
      }
    }
  }
</style>
