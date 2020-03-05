// pages/test/test.js

const app = getApp()
// app.inLaunch()//不要手动调用全局生命周期函数
console.log(app.globalData)
Page({

  /**
   * 页面的初始数据
   */
  data: {
    infoAp: app.globalData.info,
    uname: 'linger',
    cls: 'active',
    uid: 123,
    info: {
      age: 16,
      gender: '男'
    },
    isShow: true,
    score: 88,
    list: ['apple', 'banana', 'nemon', 'bear'],
    num: 1

  },
  handleTap() {
    console.log('tap')
    // this.data.num+=1 //这里只能修改数据层,视图层没有变化
    this.setData({ // setData可以同时更新数据和视图,但是视图的更新是异步的
      num: this.data.num + 1
    }, () => {
      // 页面更新完毕,这个函数会被触发(这是DOM的异步更新成功才触发)
      console.log('setData改数据之后改DOM完成', this.data.num)
    })
    console.log('setData改数据', this.data.num)
  },

  handleLongpress() {
    console.log('longpress')
  },

  // 测试事件冒泡
  handleTap1() {
    console.log('tap1')
  },
  handleTap2() {
    console.log('tap2')
  },
  handleTap3() {
    console.log('tap3')
  },
  handleTap4() {
    console.log('tap4')
  },
  bindViewTap(e) {
    console.log('bindViewTap', e)
  },
  bindButtonTap(e) {
    console.log('bindButtonTap', e)
    // 调用全局的自定义方法,打印获取全局的globalData
    app.showInfo()
  },
  testTap() {
    // 提示框
    // wx.showToast({
    //   title: '成功',
    // })

    // 确认框
    // wx.showModal({
    //   title: '提示',
    //   content: '这是一个模态弹窗',
    //   success(res) {
    //     if (res.confirm) {
    //       console.log('用户点击确定')
    //     } else if (res.cancel) {
    //       console.log('用户点击取消')
    //     }
    //   }
    // })

    // 选择分类,列表弹框
    // wx.showActionSheet({
    //   itemList: ['A', 'B', 'C'],
    //   success(res) {
    //     console.log(res.tapIndex)
    //   },
    //   fail(res) {
    //     console.log(res.errMsg)
    //   }
    // })


    //动态设置当前页面的标题
    wx.setNavigationBarTitle({
      title: '当前页面'
    })


    // // 设置页面导航条颜色
    // wx.setNavigationBarColor({
    //   frontColor: '#ffffff',
    //   backgroundColor: '#ff0000',
    //   animation: {
    //     duration: 400,
    //     timingFunc: 'easeIn'
    //   }
    // })

    // wx.setBackgroundTextStyle({
    //   textStyle: 'dark' // 下拉背景字体、loading 图的样式为dark
    // })

    // wx.setBackgroundColor({
    //   backgroundColor: '#ffffff', // 窗口的背景色为白色
    // })

    // wx.setBackgroundColor({
    //   backgroundColorTop: '#ffffff', // 顶部窗口的背景色为白色
    //   backgroundColorBottom: '#ffffff', // 底部窗口的背景色为白色
    // })


    //  动态设置 tabBar 的整体样式
    // wx.setTabBarStyle({
    //   color: '#FF0000',
    //   selectedColor: '#00FF00',
    //   backgroundColor: '#0000FF',
    //   borderStyle: 'white'
    // })

    // 将页面滚动到目标位置，支持选择器和滚动距离两种方式定位
    // wx.pageScrollTo({
    //   scrollTop: 0,
    //   duration: 300
    // })


    // 从本地相册选择图片或使用相机拍照
    // wx.chooseImage({
    //   count: 3,
    //   sizeType: ['original', 'compressed'],// 原图或压缩图
    //   sourceType: ['album', 'camera'], // 相册或相机
    //   success(res) {
    //     // tempFilePath可以作为img标签的src属性显示图片
    //     const tempFilePaths = res.tempFilePaths
    //     console.log(res)

    // // 在新页面中全屏预览图片。预览的过程中用户可以进行保存图片、发送给朋友等操作
    //     wx.previewImage({
    //       current: tempFilePaths[0], // 当前显示图片的http链接
    //       urls: [...tempFilePaths] // 需要预览的图片http链接列表
    //     })

    //   }
    // })



    //从客户端会话选择文件
    // wx.chooseMessageFile({
    //   count: 10,
    //   type: 'image',
    //   success(res) {
    //     // tempFilePath可以作为img标签的src属性显示图片
    //     const tempFilePaths = res.tempFilePaths
    //   }

    // })

    // 录音
    // wx.startRecord({
    //   success(res) {
    //     const tempFilePath = res.tempFilePath

    //     wx.playVoice({
    //       filePath: tempFilePath,
    //       complete() { }
    //     })

    //   }
    // })
    // setTimeout(function () {
    //   wx.stopRecord() // 结束录音
    // }, 10000)

    // wx.switchTab({
    //   url: '/pages/center/center'
    // })

  //   wx.navigateTo({
  //     url: '/pages/movie/index',
  // //     events: {
  // //       // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
  // //       acceptDataFromOpenedPage: function (data) {
  // //         console.log(data)
  // //       },
  // //       someEvent: function (data) {
  // //         console.log(data)
  // //       }
  // // },
  // //     success: function (res) {
  // //       // 通过eventChannel向被打开页面传送数据
  // //       res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'test' })
  // //     }
  //   })

    // wx.setStorage({
    //   key: "lingling",
    //   data: "1023"
    // })

    wx.setStorageSync('lingling', '1023')
    wx.setStorageSync('lingling2', '1023')
    const infos = wx.getStorageSync('lingling')
    const res1 = wx.getStorageInfoSync()
    wx.removeStorageSync('lingling')
    const res2 = wx.getStorageInfoSync()
    // let infos=wx.getStorage({
    //   key: 'lingling',
    //   // success: function(res) {},
    //   // fail: function(res) {},
    //   // complete: function(res) {},
    // })



    console.log(infos)
    console.log(res1)
    console.log(res2)

  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})