//Page Object
Page({
  data: {
    gallery: {
      indicatorDots: true,
      vertical: false,
      autoplay: true,
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
    img: [
      {
        id: '1',
        src: 'https://mp-static-1306125602.cos.ap-shanghai.myqcloud.com/img%2FDSC02111.JPG',
      },
      {
        id: '2',
        src: 'https://photo-arch-1306125602.cos.ap-shanghai.myqcloud.com/bgpic1.JPG',
      },
    ],
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
