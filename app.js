// app.js
App({
  onLoad: function(options) {
    // 页面加载时执行的代码
    wx.hideTabBar()
    },
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  editTabbar: function () {
    //隐藏系统tabbar
    wx.hideTabBar()
    let tabbar = this.globalData.tabBar;
    let currentPages = getCurrentPages();
    let _this = currentPages[currentPages.length - 1];
    let pagePath = _this.route;
    (pagePath.indexOf('/') != 0) && (pagePath = '/' + pagePath);
    for (let i in tabbar.list) {
      tabbar.list[i].selected = false;
      (tabbar.list[i].pagePath == pagePath) && (tabbar.list[i].selected = true);
    }
    _this.setData({
      tabbar: tabbar
    });
  },
  globalData: {
    userInfo: null,
    tabBar: {
      "backgroundColor": "#ffffff",
      "color": "#333333",
      "selectedColor": "#26C55E",
      "list": [
        {
          "pagePath": "/pages/index/index",
          "text": "首页",
          "iconPath": "/static/icon/sy1.png",
          "selectedIconPath": "/static/icon/sy2.png"
        },
        {
          "pagePath": "/pages/maps/maps",
          "text": "校园地图",
          "iconPath": "/static/icon/dt2.png",
          "selectedIconPath": "/static/icon/dt1.png"
        },
        {
          "pagePath": "/pages/appPage/appPage",
          "isSpecial": true,
          "text": "工具",
          "iconPath": "/static/icon/icon4.png",
          "selectedIconPath": "/static/icon/icon3.png",
        },
        {
          "pagePath": "/pages/curriculum/curriculum",
          "text": "课程表",
          "iconPath": "/static/icon/kb1.png",
          "selectedIconPath": "/static/icon/kb2.png"
        },
        {
          "pagePath": "/pages/user/user",
          "text": "我的",
          "iconPath": "/static/icon/wd1.png",
          "selectedIconPath": "/static/icon/wd2.png"
        }
      ]
    }
  }
})
