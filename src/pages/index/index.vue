<template>
    <div class="index">
        <div class="bg-swiper">
            <!-- <index-swiper :list="list"></index-swiper> -->
            <image src="http://cdn.wenlong.ink/marry/frist.jpg" class="indexImg" />
        </div>
        <image class="inv" src="../../static/images/inv.png"/>
        <div class="bg_music" v-if="isPlay" @tap="audioPlay">
            <image src="../../static/images/music_icon.png" class="musicImg music_icon"/>
            <image src="../../static/images/music_play.png" class="music_play pauseImg"/>
        </div>
        <div class="bg_music" v-else @tap="audioPlay">
            <image src="../../static/images/music_icon.png" class="musicImg"/>
            <image src="../../static/images/music_play.png" class="music_play playImg"/>
        </div>
        
        <div class="info" :animation="animationData">
            <div class="content">
                <h1>赵鹏磊先生 & 邱岩女士</h1>
                <p>谨定于 2020年7月18日 （星期六）中午11:08</p>
                <p>农历 五月廿八 中午十一时零八分钟 举办婚礼</p>
                <p>席设：福临门大酒店</p>
                <p>地址：沈阳市沈北新区道义南大街28-4号</p>
                <p>（地铁2号线航空航天大学站A口）</p>
                <image src="../../static/images/we.png" class="img_footer"/>
            </div>
        </div>
    </div>
</template>

<script>
import IndexSwiper from 'components/indexSwiper'
import tools from 'common/js/h_tools'
export default {
  name: 'Index',
  components: {
    IndexSwiper
  },
  data () {
    return {
      isPlay: false,
      list: []
      // audioCtx: null
    }
  },
  onShow () {
    const that = this
    that.musicPlay()
  },
  methods: {
    audioPlay () {
      const that = this
      if (that.isPlay) {
        that.audioCtx.pause()
        that.isPlay = false
        tools.showToast('您已暂停音乐播放~')
      } else {
        that.audioCtx.play()
        that.isPlay = true
        tools.showToast('背景音乐已开启~')
      }
    },

    musicPlay () {
      const that = this
      if (!that.isPlay) {
        // console.log(wx.createInnerAudioContext())
        const audioCtx = wx.createInnerAudioContext()
        audioCtx.autoplay = true
        audioCtx.loop = true
        audioCtx.src = 'http://cdn.wenlong.ink/marry/music/loveYou.mp3'
        that.audioCtx = audioCtx
        that.isPlay = true
        // that.getList()
      }
    }
    // getList () {
    //   const that = this
    //   wx.cloud.callFunction({
    //     name: 'sweetImg',
    //     data: {}
    //   }).then(res => {
    //     console.log(res.result)
    //     that.list = res.result[0]
    //   })
    // },
  },

  onShareAppMessage: function (res) {
    return {
      path: '/pages/index/main'
    }
  }
}
</script>

<style scoped lang="stylus">
@-webkit-keyframes musicRotate
  from
    -webkit-transformb rotate(0deg)
  to
    -webkit-transform rotate(360deg)
@-webkit-keyframes musicStop
  from
    -webkit-transform rotate(20deg)
  to
    -webkit-transform rotate(0deg)
@-webkit-keyframes musicStart
  from
    -webkit-transform rotate(0deg)
  to
    -webkit-transform rotate(20deg)
@-webkit-keyframes infoAnimation
  0%
    -webkit-transform scale(1) translate(0, 0)
  50%
    -webkit-transform scale(.9) translate(5px, 5px)
  100%
    -webkit-transform scale(1) translate(0, 0)
.index
  height 100%
  position relative
  .img
    width 100%
    height 100%
  .bg-swiper
    position absolute
    width 100%
    height 100%
    .indexImg
      position absolute
      width 120%
      height 100%
      object-fit:cover;
  .inv
    position absolute
    top 20rpx
    left 89rpx
    width 572rpx
    height 69rpx
    z-index 9
  .bg_music
    position fixed
    right 0
    top 20rpx
    width 100rpx
    z-index 99
    disPlay flex
    justify-content flex-start
    align-items flex-start
    .musicImg
      width 60rpx
      height 60rpx
    .music_icon
      animation musicRotate 3s linear infinite
    .music_play
      width 28rpx
      height 60rpx
      margin-left -10rpx
      transform-origin top
      -webkit-transform rotate(20deg)
    .playImg
      animation musicStop 1s linear forwards
    .pauseImg
      animation musicStart 1s linear forwards
  .info
    width 630rpx
    background rgba(255, 255, 255, 0.75)
    z-index 9
    position fixed
    bottom 40rpx
    left 50rpx
    padding 10rpx
    animation infoAnimation 12s linear infinite
    .content
      width 626rpx
      border 1rpx solid #000
      display flex
      flex-direction column
      justify-content flex-start
      align-items center
      position relative
      padding-bottom 30rpx
      h1
        font-size 50rpx
        height 100rpx
        line-height 100rpx
      p
        font-size 24rpx
        height 60rpx
        line-height 60rpx
      .img_footer
        position absolute
        bottom 0
        left 53rpx
        z-index 99
        height 14rpx
        width 520rpx
</style>
