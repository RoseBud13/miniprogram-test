//Page Object
Page({
  data: {
    greetings: 'Hello my babe',
    greetingValue: '',
    imgSrcs: [],
    tabList: [],
    pageLoading: false,
  },
  changeGreetings() {
    const newGreeting = ` Hello my babe ${this.data.greetingValue} `;
    this.setData({
      greetings: newGreeting,
      greetingValue: '',
    });
  },
  //options(Object)
  onLoad: function () {},
  onReady: function () {},
  onShow: function () {},
  onHide: function () {},
  onUnload: function () {},
  onPullDownRefresh: function () {},
  onReachBottom: function () {},
  onShareAppMessage: function () {},
  onPageScroll: function () {},
  //item(index,pagePath,text)
  onTabItemTap: function () {},
});
