const cloud = require('wx-server-sdk')
cloud.init()
exports.main = async (event, context) => {
  const fileList = ['cloud://test-9k4zi.7465-test-9k4zi-1300389118/phptpBanner/photo/bg1.jpg', 'cloud://test-9k4zi.7465-test-9k4zi-1300389118/phptpBanner/photo/bg2.jpg', 'cloud://test-9k4zi.7465-test-9k4zi-1300389118/phptpBanner/photo/bg3.jpg', 'cloud://test-9k4zi.7465-test-9k4zi-1300389118/phptpBanner/photo/bg4.jpg', 'cloud://test-9k4zi.7465-test-9k4zi-1300389118/phptpBanner/photo/bg5.jpg', 'cloud://test-9k4zi.7465-test-9k4zi-1300389118/phptpBanner/photo/ph1.jpg', 'cloud://test-9k4zi.7465-test-9k4zi-1300389118/phptpBanner/photo/ph2.jpg', 'cloud://test-9k4zi.7465-test-9k4zi-1300389118/phptpBanner/photo/ph3.jpg', 'cloud://test-9k4zi.7465-test-9k4zi-1300389118/phptpBanner/photo/ph4.jpg', 'cloud://test-9k4zi.7465-test-9k4zi-1300389118/phptpBanner/photo/ph5.jpg', 'cloud://test-9k4zi.7465-test-9k4zi-1300389118/phptpBanner/photo/ps1.jpg', 'cloud://test-9k4zi.7465-test-9k4zi-1300389118/phptpBanner/photo/ps2.jpg', 'cloud://test-9k4zi.7465-test-9k4zi-1300389118/phptpBanner/photo/ps3.jpg', 'cloud://test-9k4zi.7465-test-9k4zi-1300389118/phptpBanner/photo/ps4.jpg', 'cloud://test-9k4zi.7465-test-9k4zi-1300389118/phptpBanner/photo/ps5.jpg']
  const result = await cloud.getTempFileURL({
    fileList: fileList
  })
  return result.fileList
}
