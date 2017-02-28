<template lang="html">
  <div id='home-page'>
    <header>
        <div  v-for='(tab, index) in tabs' :key="tab.tab" @click='changeTab(tab, index)' :class='tab.active ? "active" : ""' :data-tab=tab.tab>{{tab.title}}</div>
    </header>
    <div class="scroll-contain">
      <!-- name="zoom" -->
      <transition
        mode="out-in"
        @before-enter='beforeInFn'
        @before-leave='beforeOutFn'
      >
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import './home.scss'

export default {
  data () {
    return {
      threme: 'Home',
      busy: false,
      tabDirection: 1, // 1
      tabs: [
        {
          title: '全部',
          active: true,
          tab: 'all'
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
    this.tabAddClass(this.$route.query.tab)
  },
  methods: {
    changeTab: function (tab, index) {
      let threme = tab.tab
      this.tabAddClass(tab.tab, index)
      this.$router.push({path: `/home/${threme}/?tab=${threme}`})
    },
    topicDetail: function (topic) {
      this.$router.push({path: '/topic/' + topic.id})
    },
    tabAddClass: function (tab, newIndex) {
      this.tabs.map((item, index) => {
        // 判断 动画 移动 方向
        if (item.active) {
          // old 减 new < 0 右移 else 左移
          if (index - newIndex < 0) {
            this.tabDirection = -1
          } else {
            this.tabDirection = 1
          }
        }
        item.active = false
        if (item.tab === tab) {
          this.tabs[index].active = true
        }
      })
    },
    beforeInFn: function (el) {
      if (this.tabDirection < 0) { // left to right
        el.className = 'right-to-left-in'
      } else { // right to left
        el.className = 'left-to-right-in'
      }
    },
    beforeOutFn: function (el) {
      if (this.tabDirection < 0) { // left to right
        el.className = 'right-to-left-Out'
      } else { // right to left
        el.className = 'left-to-right-out'
      }
    }
  }
}
</script>
