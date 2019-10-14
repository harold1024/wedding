const cloud = require('wx-server-sdk')
cloud.init()
exports.main = async (event, context) => {
  const fileList = ['cloud://test-9k4zi.7465-test-9k4zi/phptpBanner/0.jpg', 'cloud://test-9k4zi.7465-test-9k4zi/phptpBanner/1.jpg', 'cloud://test-9k4zi.7465-test-9k4zi/phptpBanner/2.jpg', 'cloud://test-9k4zi.7465-test-9k4zi/phptpBanner/3.jpg', 'cloud://test-9k4zi.7465-test-9k4zi/phptpBanner/4.jpg', 'cloud://test-9k4zi.7465-test-9k4zi/phptpBanner/5.jpg']
  const result = await cloud.getTempFileURL({
    fileList: fileList
  })
  return result.fileList
}
