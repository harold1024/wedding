const cloud = require('wx-server-sdk')
cloud.init()
exports.main = async (event, context) => {
  const fileList = ['cloud://test-9k4zi.7465-test-9k4zi-1300389118/phptpBanner/1.jpg', 'cloud://test-9k4zi.7465-test-9k4zi-1300389118/phptpBanner/4.jpg', 'cloud://test-9k4zi.7465-test-9k4zi-1300389118/phptpBanner/41.jpg', 'cloud://test-9k4zi.7465-test-9k4zi-1300389118/phptpBanner/7.jpg', 'cloud://test-9k4zi.7465-test-9k4zi-1300389118/phptpBanner/23.jpg']
  const result = await cloud.getTempFileURL({
    fileList: fileList
  })
  return result.fileList
}
