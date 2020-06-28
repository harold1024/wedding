const cloud = require('wx-server-sdk')
cloud.init()
exports.main = async (event, context) => {
  const fileList = ['true']
  const result = await cloud.getTempFileURL({
    fileList: fileList
  })
  return result.fileList
}
