const cloud = require('wx-server-sdk')
cloud.init()
exports.main = async (event, context) => {
  const fileList = ['cloud://test-bhtyu.7465-test-bhtyu-1300389118/homeImg/frist.jpg', 'cloud://test-bhtyu.7465-test-bhtyu-1300389118/homeImg/WechatIMG21.jpeg', 'cloud://test-bhtyu.7465-test-bhtyu-1300389118/homeImg/WechatIMG20.jpeg', 'cloud://test-bhtyu.7465-test-bhtyu-1300389118/homeImg/WechatIMG18.jpeg', 'cloud://test-bhtyu.7465-test-bhtyu-1300389118/homeImg/j_S6193102DG123.jpg','cloud://test-bhtyu.7465-test-bhtyu-1300389118/homeImg/j_S6193102DG004.jpg']
  const result = await cloud.getTempFileURL({
    fileList: fileList
  })
  return result.fileList
}
