const cloud = require('wx-server-sdk')
cloud.init()
exports.main = async (event, context) => {
  // const fileList = ['cloud://test-bhtyu.7465-test-bhtyu-1300389118/photo/WechatIMG33.jpeg', 'cloud://test-bhtyu.7465-test-bhtyu-1300389118/photo/WechatIMG32.jpeg', 'cloud://test-bhtyu.7465-test-bhtyu-1300389118/photo/WechatIMG31.jpeg', 'cloud://test-bhtyu.7465-test-bhtyu-1300389118/photo/WechatIMG29.jpeg', 'cloud://test-bhtyu.7465-test-bhtyu-1300389118/photo/WechatIMG28.jpeg', 'cloud://test-bhtyu.7465-test-bhtyu-1300389118/photo/WechatIMG27.jpeg', 'cloud://test-bhtyu.7465-test-bhtyu-1300389118/photo/WechatIMG26.jpeg', 'cloud://test-bhtyu.7465-test-bhtyu-1300389118/photo/WechatIMG25.jpeg', 'cloud://test-bhtyu.7465-test-bhtyu-1300389118/photo/WechatIMG24.jpeg', 'cloud://test-bhtyu.7465-test-bhtyu-1300389118/photo/j_S6193102DG132.jpg', 'cloud://test-bhtyu.7465-test-bhtyu-1300389118/photo/j_S6193102DG015.jpg', 'cloud://test-bhtyu.7465-test-bhtyu-1300389118/photo/j_S6193102DG006.jpg']
  const fileList = ['http://cdn.wenlong.ink/marry/photo/2.jpg', 'http://cdn.wenlong.ink/marry/photo/4.jpg', 'http://cdn.wenlong.ink/marry/photo/5.jpg', 'http://cdn.wenlong.ink/marry/photo/6.jpg', 'http://cdn.wenlong.ink/marry/photo/7.jpg', 'http://cdn.wenlong.ink/marry/photo/8.jpg', 'http://cdn.wenlong.ink/marry/photo/10.jpg', 'http://cdn.wenlong.ink/marry/photo/11.jpg', 'http://cdn.wenlong.ink/marry/photo/12.jpg', 'http://cdn.wenlong.ink/marry/photo/13.jpg', 'http://cdn.wenlong.ink/marry/photo/14.jpg', 'http://cdn.wenlong.ink/marry/photo/17.jpg']
  const result = await cloud.getTempFileURL({
    fileList: fileList
  })
  return result.fileList
}
