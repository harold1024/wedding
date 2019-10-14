import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

wx.cloud.init({
  env: 'test-9k4zi',
  traceUser: true
})

const app = new Vue(App)
app.$mount()
