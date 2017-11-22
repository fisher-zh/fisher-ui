// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import MessageBox from '../packages/message-box'
import upload from '../packages/upload'
import loading from '../packages/loading'
Vue.use(MessageBox)
Vue.use(upload)
Vue.use(loading)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
