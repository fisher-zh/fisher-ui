import Vue from 'vue'
import MessageBoxVue from './message-box.vue'

const MessageBoxConstructor = Vue.extend(MessageBoxVue)

let instanceStack = [] // messagebox  vue对象
let msgStack = []
let currentMsg

const showMsg = () => {
  // 初始化instance对象
  const instance = new MessageBoxConstructor({
    el: document.createElement('div')
  })
  instance.callback = defaultCallback
  instanceStack.push(instance)

  if (!instance.visible) {
    console.log('-------')
    console.log(msgStack)
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
  let instance = null
  // 首先判断当前的弹窗是否有值
  if (currentMsg) {
    if (currentMsg.resolve) {
      currentMsg.resolve(action)
    }
    // 获取最后入栈的对象
    if (instanceStack.length > 0) {
      instance = instanceStack.pop()
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
      msgStack.push(currentMsg)
      showMsg()
    })
  } else {
    msgStack.push({
      options: options,
      callback: callback
    })
    showMsg()
  }
}

export default MessageBox
