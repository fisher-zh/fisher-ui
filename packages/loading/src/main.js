import Vue from 'vue'
import fsLoading from './fs-loading.vue'

const LoadingConstructor = Vue.extend(fsLoading)
let defaultData = () => {
  return {
    visible: false,
    color: '#000'
  }
}
let instance = null

const install = (Vue, options) => {
  Vue.directive('loading', {
    bind: function (el, binding, vnode) {
      // 判断是否可以定位，不可以则添加position
      if (el.style.position !== 'relative' && el.style.position !== 'fixed' && el.style.position !== 'absolute') {
        el.style.position = 'relative'
      }
      // 设置各个参数
      console.log('===========')
      const spinnerColor = el.getAttribute('fs-loading-color')
      const spinnerText = el.getAttribute('fs-loading-text')
      const spinnerBgColor = el.getAttribute('fs-loading-background')

      let data = defaultData()
      data.visible = binding.value
      if (spinnerColor) {
        data.color = spinnerColor
      }
      if (spinnerText) {
        data.text = spinnerText
      }
      if (spinnerBgColor) {
        data.background = spinnerBgColor
      }
      instance = new LoadingConstructor({
        el: document.createElement('div'),
        data: data
      })
      el.appendChild(instance.$el)
      // console.log(el.style.position)
    },
    update: function (el, binding) {
      // console.log(binding.value)
      instance.$data.visible = binding.value
    },
    unbind: function (el, binding) {
      if (instance) {
        el.removeChild(instance.$el)
      }
    }
  })
}
export default install
