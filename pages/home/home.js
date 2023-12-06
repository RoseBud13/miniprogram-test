//Page Object
Page({
  data: {
    pageTitle: '小程序项目',
    cellList: [
      {
        title: 'Data Binding',
        url: '/pages/data-binding/data-binding',
        icon: 'data',
      },
      {
        title: 'Template',
        url: '/pages/template/template',
        icon: 'user-1',
      },
      {
        title: 'Gallery',
        url: '/pages/gallery/gallery',
        icon: 'image',
      },
    ],
    brandList: [
      {
        title: 'Byredo',
        url: '/pages/data-binding/data-binding',
        icon: 'letters-b',
      },
      {
        title: 'Fotografiska',
        url: '/pages/brands/fotografiska/fotografiska',
        icon: 'letters-f',
      },
      {
        title: 'IKEA',
        url: '/pages/brands/fotografiska/fotografiska',
        icon: 'letters-i',
      },
      {
        title: 'Tamburins',
        url: '/pages/brands/fotografiska/fotografiska',
        icon: 'letters-t',
      },
      {
        title: '麦当劳',
        url: '/pages/brands/fotografiska/fotografiska',
        icon: 'letters-m',
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
