const myDir = {
  bind: function () {
    console.log('bind')
    console.log(this)
  },
  inserted: function () { console.log('inserted') },
  update: function () { console.log('update') },
  componentUpdated: function () { console.log('componentUpdated') },
  unbind: function () { console.log('unbind') }
}

export default myDir
