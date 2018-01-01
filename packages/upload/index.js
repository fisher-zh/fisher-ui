import Upload from './upload.vue'
Upload.install = function(Vue, opt = {}) {
  Vue.component(Upload.name, Upload);
}

export default Upload
