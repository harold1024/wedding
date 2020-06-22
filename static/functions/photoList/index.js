const cloud = require('wx-server-sdk')
cloud.init()
exports.main = async (event, context) => {
  const fileList = ['cloud://test-bhtyu.7465-test-bhtyu-1300389118/photo/WechatIMG33.jpeg', 'cloud://test-bhtyu.7465-test-bhtyu-1300389118/photo/WechatIMG32.jpeg', 'cloud://test-bhtyu.7465-test-bhtyu-1300389118/photo/WechatIMG31.jpeg', 'cloud://test-bhtyu.7465-test-bhtyu-1300389118/photo/WechatIMG29.jpeg', 'cloud://test-bhtyu.7465-test-bhtyu-1300389118/photo/WechatIMG28.jpeg', 'cloud://test-bhtyu.7465-test-bhtyu-1300389118/photo/WechatIMG27.jpeg', 'cloud://test-bhtyu.7465-test-bhtyu-1300389118/photo/WechatIMG26.jpeg', 'cloud://test-bhtyu.7465-test-bhtyu-1300389118/photo/WechatIMG25.jpeg', 'cloud://test-bhtyu.7465-test-bhtyu-1300389118/photo/WechatIMG24.jpeg', 'cloud://test-bhtyu.7465-test-bhtyu-1300389118/photo/j_S6193102DG132.jpg', 'cloud://test-bhtyu.7465-test-bhtyu-1300389118/photo/j_S6193102DG015.jpg', 'cloud://test-bhtyu.7465-test-bhtyu-1300389118/photo/j_S6193102DG006.jpg']
  const result = await cloud.getTempFileURL({
    fileList: fileList
  })
  return result.fileList
}
