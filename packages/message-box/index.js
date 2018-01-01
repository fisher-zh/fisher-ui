import MessageBox from './src/main.js'

MessageBox.install = function(Vue, opt = {}) {
  Vue.prototype.$messageBox = MessageBox
}

export default MessageBox
