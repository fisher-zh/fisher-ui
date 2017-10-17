import MessageBox from './src/main.js'

const install = function(Vue, opt = {}) {
  Vue.prototype.$messageBox = MessageBox
}

export default {
  install,
  MessageBox
}
