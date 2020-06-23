<template>
    <div class="photo">
        <h-swiper :list="list" :isGif="isGif"></h-swiper>
    </div>
</template>

<script>
import HSwiper from 'components/swiper'
// import imgData from 'common/json/imgData.json'
export default {
  name: 'Photo',
  components: {
    HSwiper
  },
  onShow () {
    const that = this
    that.isGif = !that.isGif
    that.getList()
  },

  data () {
    return {
      list: [],
      isGif: false
    }
  },
  methods: {
    getList () {
      const that = this
      // const db = wx.cloud.database()
      // const banner = db.collection('indexBanner')
      // banner.get().then(res => {
      //   that.list = res.data[0].indexBanner
      //   console.log(res.data[0].indexBanner)
      // })
      // wx.cloud.downloadFile({
      //   fileID: ['cloud://test-9k4zi.7465-test-9k4zi-1300389118/phptpBanner/0.jpg'],
      //   success: res => {
      //     // 返回临时文件路径
      //     console.log(res.tempFilePath)
      //   },
      //   fail: console.error
      // })
      wx.cloud.callFunction({
        name: 'photoList',
        data: {}
      }).then(res => {
        that.list = res.result
        console.log(that.list)
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.photo
    height 100%
</style>

