import fsLoading from './fs-loading.vue'

let defaultData = () => {
  return {
    visible: false,
    color: '#000'
  }
}

const install = (Vue, options) => {
  const LoadingConstructor = Vue.extend(fsLoading)
  Vue.directive('loading', {
    bind: function (el, binding, vnode) {
      // 判断是否可以定位，不可以则添加position
      if (el.style.position !== 'relative' && el.style.position !== 'fixed' && el.style.position !== 'absolute') {
        el.style.position = 'relative'
      }
      // 设置各个参数
      // console.log('===========')
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
      const mask = new LoadingConstructor({
        el: document.createElement('div'),
        data: data
      })
      el.instance = mask
      el.mask = mask.$el
      el.appendChild(mask.$el)
      // console.log(el.style.position)
    },
    update: function (el, binding) {
      // console.log(binding.value)
      el.instance.$data.visible = binding.value
    },
    unbind: function (el, binding) {
      if (el.instance) {
        el.removeChild(el.mask)
      }
    }
  })
}
export default install
