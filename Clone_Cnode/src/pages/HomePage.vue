<template lang="html">
  <div id='home-page'>
    <header>
        <div v-for='tab in tabs' :key="tab.tab" @click='changeTab(tab)' :class='tab.active ? "active" : ""' :data-tab=tab.tab>{{tab.title}}</div>
    </header>
    <div class="scroll-contain" v-infinite-scroll='getDates' infinite-scroll-disabled="busy" infinite-scroll-distance="10">
      <ul>
        <li v-for='item in datas' :key='item.id' @click='topicDetail(item)'>
          <p><b>{{item.author.loginname}}&nbsp;</b>{{item.tab}}</p>
          <h3>{{item.title}}</h3>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Home',
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
  // mount () {
  //   console.log('mout')
  // },
  methods: {
    getDates: function (tab) {
      this.busy = true
      let threme = tab || ''
      let url = `https://cnodejs.org/api/v1/topics?tab=${threme}&limit=20`
      fetch(url, {
        method: 'GET'
      }).then((response) => {
        return response.json()
      }).then((json) => {
        // this.datas.push.apply(this.datas, json.data)
        // this.datas = [...this.datas, json.data]
        this.$nextTick(() => {
          if (tab) {
            this.datas.length = 0
          }
          this.datas = this.datas.concat(json.data)
          this.busy = false
        })
      })
    },
    changeTab: function (tab) {
      this.tabs.map((item, index) => {
        item.active = false
        if (item.tab === tab.tab) {
          this.tabs[index].active = true
        }
      })
      // tab threme
      this.getDates(tab.tab)
    },
    topicDetail: function (topic) {
      console.log(topic.id)
      this.$router.push({path: '/topic/' + topic.id})
    }
  }
}
</script>
<style lang="css">
  @import '../style/index.css';
  #home-page {
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
    .scroll-contain {
      position: absolute;
      left: 0px;
      top: 2rem;
      bottom: 2.5rem;
      right: 0px;
      overflow-y: auto;
      padding-bottom: 1rem;
      /*&::-webkit-scrollbar {
        width: .3rem;
        height: .3rem;
        background-color: #F5F5F5;
      }
      &::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(180, 168, 152, 0.3);
        border-radius: 5px;
        background-color: #F5F5F5;
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 6px;
        -webkit-box-shadow: inset 0 0 6px rgba(90, 80, 80, .3);
        background-color: #555;
      }*/
      ul {
        padding: 0.8rem;
        li {
          padding:  .6rem 0;
        }
      }
    }
  }
</style>
