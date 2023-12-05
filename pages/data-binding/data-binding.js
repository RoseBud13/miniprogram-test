//Page Object
Page({
  data: {
    greetings: 'Hello my babe',
    greetingValue: '',
  },
  changeGreetings() {
    const newGreeting = ` Hello my babe ${this.data.greetingValue} `;
    this.setData({
      greetings: newGreeting,
      greetingValue: '',
    });
  },
  //options(Object)
  onLoad: function () {
    console.log('Page Loaded: data binding');
  },
  onReady: function () {},
  onShow: function () {},
  onHide: function () {},
  onUnload: function () {
    console.log('Page Unloaded: data binding');
  },
  onPullDownRefresh: function () {},
  onReachBottom: function () {},
  onShareAppMessage: function () {},
  onPageScroll: function () {},
  //item(index,pagePath,text)
  onTabItemTap: function () {},
});
