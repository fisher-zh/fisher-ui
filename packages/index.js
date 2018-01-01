import Upload from './upload'
import MessageBox from './message-box'
import Loading from './loading'

const install = function(Vue, opt = {}) {
  Vue.component(Upload.name, Upload);
  Vue.use(Loading);
  Vue.prototype.$messageBox = MessageBox;
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  Upload,
  MessageBox,
  Loading
}

