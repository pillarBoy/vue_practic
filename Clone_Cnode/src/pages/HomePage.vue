<template lang="html">
  <div id='home-page'>
    <header>
        <div  v-for='tab in tabs' :key="tab.tab" @click='changeTab(tab)' :class='tab.active ? "active" : ""' :data-tab=tab.tab>{{tab.title}}</div>
    </header>
    <!-- <router-view></router-view> -->
    <div class="scroll-contain">
      <transition
      name="zoom"
      mode="out-in"
      >
        <router-view></router-view>
      </transition>
    </div>
    <!-- <topice-list></topice-list> -->
    <!-- <div class="scroll-contain" v-infinite-scroll='getDates' infinite-scroll-disabled="busy" infinite-scroll-distance="10">
      <ul>
        <li v-for='item in datas' :key='item.id' @click='topicDetail(item)'>
          <p><b>{{item.author.loginname}}&nbsp;</b>{{item.tab}}</p>
          <h3>{{item.title}}</h3>
        </li>
      </ul>
    </div> -->
  </div>
</template>

<script>
import TopicList from '../components/TopicList'
export default {
  data () {
    return {
      threme: 'Home',
      busy: false,
      tabs: [
        {
          title: '全部',
          active: true,
          tab: ''
        }, {
          title: '精华',
          active: false,
          tab: 'good'
        }, {
          title: '分享',
          active: false,
          tab: 'share'
        }, {
          title: '招聘',
          active: false,
          tab: 'job'
        }, {
          title: '问答',
          active: false,
          tab: 'ask'
        }],
      datas: []
    }
  },
  mounted () {
    // 过渡动画结束后，infinite-scroll 不会自动调用获取数据函数了（原因未知），手动调用getDates
    // this.getDates()
    // this.$route.params
    // console.log(this.$route.params)
    // console.log(this.$route.query)
  },
  methods: {
    // getDates: function (tab) {
    //   this.busy = true
    //   let threme = tab || ''
    //   let url = `https://cnodejs.org/api/v1/topics?tab=${threme}&limit=20`
    //   fetch(url, {
    //     method: 'GET'
    //   }).then((response) => {
    //     return response.json()
    //   }).then((json) => {
    //     // this.datas.push.apply(this.datas, json.data)
    //     // this.datas = [...this.datas, json.data]
    //     this.$nextTick(() => {
    //       if (tab) {
    //         this.datas.length = 0
    //       }
    //       this.datas = this.datas.concat(json.data)
    //       this.busy = false
    //     })
    //   })
    // },
    changeTab: function (tab) {
      let threme = tab.tab || 'all'
      // this.$router.push({path: '/home/' + threme})
      this.$router.push({path: `/home/${threme}/?tab=${threme}`})
      this.tabs.map((item, index) => {
        item.active = false
        if (item.tab === tab.tab) {
          this.tabs[index].active = true
          // this.$router.push({path: `/home/${item.tab}`})
        }
      })
      // tab threme
      // this.getDates(tab.tab)
    },
    topicDetail: function (topic) {
      console.log(topic.id)
      this.$router.push({path: '/topic/' + topic.id})
    }
  },
  components: {
    TopiceList: TopicList
  }
}
</script>
<style lang="css">
  @import '../style/index.css';
  #home-page {
    /*position: relative;*/
    header {
      display: flex;
      width: 100%;
      height: 2rem;
      background-color: $headerBackColor;

      div {
        width: 20%;
        line-height: 2rem;
        font-size: $fontSize16;
        text-align: center;
      }


      /*.active {
        font-weight: bold;
        color: $activeColor;
        background-color: $activeBackColor;
      }*/
    }
    /*.scroll-contain {
      position: absolute;
      left: 0px;
      top: 2rem;
      right: 0px;
      bottom: 2.5rem;
    }*/
    .scroll-contain {
      position: absolute;
      left: 0px;
      top: 2rem;
      bottom: 2.5rem;
      right: 0px;
      overflow-y: auto;
      padding: 1rem;
    }
  }
</style>
