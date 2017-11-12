import Vue from 'vue'
import MessageBoxVue from './message-box.vue'

const MessageBoxConstructor = Vue.extend(MessageBoxVue)

let instance // messagebox  vue对象
let msgQueue = []
let currentBox

const initInstance = () => {
  instance = new MessageBoxConstructor({
    el: document.createElement('div')
  })
  instance.callback = defaultCallback
}

const showMsg = () => {
  initInstance()
  document.body.appendChild(instance.$el);
  currentBox = msgQueue.pop()
  // 遍历传入的属性 赋值给instance
  let options = currentBox.options;
  for (let prop in options) {
    if (options.hasOwnProperty(prop)) {
      instance[prop] = options[prop];
    }
  }
  Vue.nextTick(() => {
    instance.visible = true;
  })
}

const defaultCallback = (action) => {
  // 首先判断当前的弹窗是否有值
  if (currentBox) {
    document.body.removeChild(instance.$el);
    currentBox.resolve(action)
  }
}

const MessageBox = (options, callback) => {
  if (!callback) {
    callback = defaultCallback
  }
  if (typeof Promise !== 'undefined') {
    return new Promise((resolve, reject) => { // eslint-disable-line
      msgQueue.push({
        options: options,
        callback: callback,
        resolve: resolve,
        reject: reject
      })
      showMsg()
    })
  } else {
    msgQueue.push({
      options: options,
      callback: callback
    })
    showMsg()
  }
}

export default MessageBox
export { MessageBox }
