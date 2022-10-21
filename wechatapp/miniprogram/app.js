// app.js
App({
    onLaunch() {
      wx.cloud.init({
        env: 'dev-4gv47eeqc2c1d37b'
      })
      
    },
    globalData: {
      userInfo: null
    }
  })