import upload from './upload.vue'
const install = function(Vue, opt = {}) {
  Vue.component(upload.name, upload);
}

export default {
  install,
  upload
}
