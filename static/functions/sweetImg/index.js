const cloud = require('wx-server-sdk')
cloud.init()
exports.main = async (event, context) => {
  const fileList = ['cloud://test-9k4zi.7465-test-9k4zi-1300389118/phptpBanner/bg1.jpg', 'cloud://test-9k4zi.7465-test-9k4zi-1300389118/phptpBanner/bg2.jpg', 'cloud://test-9k4zi.7465-test-9k4zi-1300389118/phptpBanner/bg3.jpg', 'cloud://test-9k4zi.7465-test-9k4zi-1300389118/phptpBanner/bg4.jpg', 'cloud://test-9k4zi.7465-test-9k4zi-1300389118/phptpBanner/bg5.jpg']
  const result = await cloud.getTempFileURL({
    fileList: fileList
  })
  return result.fileList
}
