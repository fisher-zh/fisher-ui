import Vue from 'vue'
import MessageBoxVue from './message-box.vue'

const MessageBoxConstructor = Vue.extend(MessageBoxVue)

let instance // messagebox  vue对象
let msgQueue = []
let currentMsg

const initInstance = () => {
  instance = new MessageBoxConstructor({
    el: document.createElement('div')
  })
  instance.callback = defaultCallback
}

const showMsg = () => {
  if (!instance) {
    initInstance()
  }
  if (!instance.visible) {
    if (msgQueue.length > 0) {
      currentMsg = msgQueue.shift()
    }
    document.body.appendChild(instance.$el);
    // 遍历传入的属性 赋值给instance
    let options = currentMsg.options;
    for (let prop in options) {
      if (options.hasOwnProperty(prop)) {
        instance[prop] = options[prop];
      }
    }
    if (options.callback === undefined) {
      instance.callback = defaultCallback;
    }
    Vue.nextTick(() => {
      instance.visible = true;
    })
  }
}

const defaultCallback = (action) => {
  // 首先判断当前的弹窗是否有值
  if (currentMsg) {
    if (currentMsg.resolve) {
      currentMsg.resolve(action)
    }
    let timer = setTimeout(_ => {
      document.body.removeChild(instance.$el);
      clearTimeout(timer)
    }, 0)
  }
}

const MessageBox = (options, callback) => {
  if (!callback) {
    callback = defaultCallback
  }
  if (typeof Promise !== 'undefined') {
    return new Promise((resolve, reject) => { // eslint-disable-line
      currentMsg = {
        options: options,
        callback: callback,
        resolve: resolve,
        reject: reject
      }
      msgQueue.push(currentMsg)
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
