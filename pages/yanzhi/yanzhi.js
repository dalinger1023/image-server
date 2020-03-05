// pages/yanzhi/yanzhi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result: {},
    img:''

  },
  // 拍照测试颜值
  testFace(){
  let that=this

    //从本地相册选择图片或使用相机拍照
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],// 原图或压缩图
      sourceType: ['album', 'camera'], // 相册或相机
      // success(res) {
      //   that.checkImage(res.tempFilePaths[0])
      // }
      
      success:(res)=>{
        let imgPath = res.tempFilePaths[0]
        this.setData({
          img: imgPath
        })
        // tempFilePath可以作为img标签的src属性显示图片
        // const tempFilePaths = res.tempFilePaths
        this.checkImage(imgPath)
      }

    })

  },
  // 实现图片上传检测颜值功能
  checkImage(path) {
    // 把本地选中的图片上传到AI接口
    wx.uploadFile({
      // 上传图片的地址
      url: 'https://ai.qq.com/cgi-bin/appdemo_detectface',
      // 本地选中的图片的路径
      filePath: path,
      // 服务器根据该名称获取上传的图片信息(接口要求的文件名)
      name: 'image_file',

      // success: (res) => {
      //   let obj = JSON.parse(res.data)
      //   this.setData({
      //     result: obj.data.face[0]
      //   })
      // }

      success: (res) => {
        console.log(res)

        let obj = JSON.parse(res.data)
        if (obj.data.face.length === 0) {
          wx.showToast({
            title: '请更换图片'
          })
          return
        }
        this.setData({
          result: obj.data.face[0]
        })


      }



    })
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
    // 定制分享的效果
    return {
      // 分享弹窗的标题
      title: '试试你的颜值',
      // 分享的默认页面路径
      path: '/pages/index/index',
      // 弹窗缩略图的图片路径
      imageUrl: '/static/lingermiao.jpg'
    }

  }
})