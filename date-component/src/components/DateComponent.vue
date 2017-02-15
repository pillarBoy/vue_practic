<template lang="html">
  <div id='date-component'>
    <div class="condition">
      <input type="text" @click="selectDate" name="" value="" ref='time' v-model='theDate' />
    </div>
    <table v-show='showTab'>
      <caption align="top">
        <button @click='preMonth' type="button" name="button">{{'<<'}}</button>
        {{dateTitl||'xxxx年xx'}}
        <button @click='nextMonth' type="button" name="button">{{'>>'}}</button>
      </caption>
      <thead>
        <tr>
          <td v-for='day in days'>{{day}}</td>
        </tr>
      </thead>
      <tbody @click='chooseTheDate'>
        <tr>
          <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
        </tr>
        <tr>
          <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
        </tr>
        <tr>
          <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
        </tr>
        <tr>
          <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
        </tr>
        <tr>
          <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
        </tr>
        <tr>
          <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ['defaultTime'],
  data () {
    return {
      showTab: false,
      days: ['日', '一', '二', '三', '四', '五', '六'],
      dateTitl: '',
      dates: [],
      Year: null,
      Month: null,
      day: null,
      totalDates: null,
      theFirstDay: null,
      theDate: ''
    }
  },
  methods: {
    // display calendar
    showTable: function () {
      this.showTab = !this.showTab
    },
    // click calendar
    chooseTheDate: function (event) {
      if (event.target.innerHTML.trim()) {
        let clickDate = parseInt(event.target.innerHTML)
        let selDate = clickDate < 10 ? '0' + clickDate : clickDate
        let selMonth = this.Month < 10 ? '0' + this.Month : this.Month
        this.theDate = this.Year + '-' + selMonth + '-' + selDate
      }
      // get select date
      let forParent = this.theDate || 'test'
      // 给父组件穿选择的日期
      this.$emit('getDate', forParent)
      // hide date
      this.showTab = !this.showTab
    },
    // click input
    selectDate: function () {
      this.showTab = !this.showTab
      this.dealDate()
    },
    // next month
    nextMonth: function () {
      this.dealDate('nextMonth')
    },
    // pre month
    preMonth: function () {
      this.dealDate('preMonth')
    },
    // dealDate get year month totalDates
    dealDate: function (type) {
      switch (type) {
        case 'preMonth':
          if (this.Month > 1) {
            this.Month--
          } else {
            this.Year--
            this.Month = 12
          }
          break
        case 'nextMonth':
          if (this.Month < 12) {
            this.Month++
          } else {
            this.Year++
            this.Month = 1
          }
          break
        default:
          let time = this.$refs.time.value
          if (time.trim()) {
            time = new Date(time)
          } else {
            time = this.defaultTime ? new Date(this.defaultTime) : new Date()
          }
          this.Year = time.getFullYear()
          this.Month = time.getMonth() + 1
      }

      this.theFirstDay = this.calFirstDay(this.Year, this.Month)
      this.totalDates = this.theMonthTotalDates(this.Year, this.Month, this.isLeapYear(this.Year))
      this.dateTitl = `${this.Year}年${this.Month}月`
      // 装载日历
      this.loadDate(this.theFirstDay, this.totalDates)
    },
    // 装载日历
    loadDate: function (theFirstDay, totalDates) {
      // 组装月份 二位数组 queryselector
      let trs = window.document.querySelectorAll('#date-component table tbody tr')
      trs = Array.prototype.slice.call(trs)
      let startDate = 1
      trs.map((tr, index) => {
        let tds = Array.prototype.slice.call(tr.children)
        if (index === 0) { // 第一周
          //
          tds.map((td, key) => {
            //  >= 当前月的第一天的星期
            if (key >= theFirstDay) {
              td.innerHTML = startDate
              startDate++
            } else { // 清空当前 日期号
              td.innerHTML = ''
            }
          })
        } else {
          tds.map((td, key) => {
            if (startDate <= totalDates) {
              td.innerHTML = startDate
              startDate++
            } else {
              td.innerHTML = ''
            }
          })
        }
      })
    },
    // 判断是否闰年 是返回 true
    isLeapYear: function (year) {
      if ((year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0)) {
        return true
      } else {
        return false
      }
    },
    // 计算指定年的指定月份第一天是星期几
    calFirstDay: function (year, month) {
      return new Date(`${year}/${month}/01`).getDay()
    },
    // 当月总共天数
    theMonthTotalDates: function (year, month, isLeapYear) {
      let result
      if (month === 2) {
        // 是否闰年
        if (isLeapYear) {
          result = 29
        } else {
          result = 28
        }
      } else {
        // 是否月大
        if (month < 8) {
          result = month % 2 === 1 ? 31 : 30
        } else {
          result = month % 2 === 0 ? 31 : 30
        }
      }
      return result
    }
  }
}
</script>

<style lang="css">
  #date-component {
    .condition {
        line-height: 30px;
    }
    table {
      width: 350px;
      margin: 0 auto;
      border-collapse: collapse;
      caption {
        line-height: 30px;
        font-size: 18px;
      }
      thead {
        tr {
          td {
            border-spacing: 5px;
            padding: 5px 10px;
            border: 1px solid #ccc;
            font-weight: 600;
            background-color: #eee;
          }
        }
      }
      tbody {
        tr {
          width: 100%;
          height: 50px;
          td {
            height: 21px;
            border: 1px solid #ddd;
          }
        }
      }
    }
  }
</style>
