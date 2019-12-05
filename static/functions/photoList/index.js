const cloud = require('wx-server-sdk')
cloud.init()
exports.main = async (event, context) => {
  const fileList = ['cloud://test-9k4zi.7465-test-9k4zi-1300389118/phptpBanner/photo/25.jpg', 'cloud://test-9k4zi.7465-test-9k4zi-1300389118/phptpBanner/photo/29.jpg', 'cloud://test-9k4zi.7465-test-9k4zi-1300389118/phptpBanner/photo/31.jpg', 'cloud://test-9k4zi.7465-test-9k4zi-1300389118/phptpBanner/photo/30.jpg', 'cloud://test-9k4zi.7465-test-9k4zi-1300389118/phptpBanner/photo/40.jpg', 'cloud://test-9k4zi.7465-test-9k4zi-1300389118/phptpBanner/photo/37.jpg', 'cloud://test-9k4zi.7465-test-9k4zi-1300389118/phptpBanner/photo/38.jpg', 'cloud://test-9k4zi.7465-test-9k4zi-1300389118/phptpBanner/photo/3.jpg', 'cloud://test-9k4zi.7465-test-9k4zi-1300389118/phptpBanner/photo/6.jpg', 'cloud://test-9k4zi.7465-test-9k4zi-1300389118/phptpBanner/photo/36.jpg', 'cloud://test-9k4zi.7465-test-9k4zi-1300389118/phptpBanner/photo/35.jpg', 
'cloud://test-9k4zi.7465-test-9k4zi-1300389118/phptpBanner/photo/13.jpg']
  const result = await cloud.getTempFileURL({
    fileList: fileList
  })
  return result.fileList
}
