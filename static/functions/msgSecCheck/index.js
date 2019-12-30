const cloud = require('wx-server-sdk')
cloud.init()
exports.main = async (event, context) => {
  try {
    var result = await cloud.openapi.security.msgSecCheck({
      content: event.text
    })
    return result
  } catch (err) {
    return err
  }
}
