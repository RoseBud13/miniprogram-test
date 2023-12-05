//Page Object
Page({
  data: {
    gallery: {
      indicatorDots: true,
      vertical: false,
      autoplay: false,
      circular: true,
      interval: 3000,
      duration: 500,
    },
    content: {
      indicatorDots: false,
      vertical: true,
      autoplay: false,
      circular: true,
      interval: 5000,
      duration: 500,
    },
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
