// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    // const logs = wx.getStorageSync('logs') || [];
    // logs.unshift(Date.now());
    // console.log('logs', logs);
    // wx.setStorageSync('logs', logs);

    // 登录
    wx.login({
      success: (res) => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log('login', res);
      },
    });
  },
  globalData: {
    userInfo: null,
  },
});
