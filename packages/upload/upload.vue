<template>
  <div ref="mountDom" :class="className" class="fs-upload-warpper">
    {{ uploadText }}
    <form ref="form" class="fs-upload-formClass">
      <input v-if="isMultiple" ref="input" @change="change" class="fs-upload-inputClass" type="file" name="Filedata" accept="image/jpeg,image/gif,image/png,image/jpg" multiple="multiple" />
      <input v-else ref="input" @change="change" class="fs-upload-inputClass" type="file" name="Filedata" accept="image/jpeg,image/gif,image/png,image/jpg" />
    </form>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'fs-upload',
  props: {
    // 类名
    className: {
      type: String,
      default: 'inputA'
    },
    isMultiple: {
      type: Boolean,
      default: false
    },
    url: {
      type: String,
      required: true
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      uploadText: 'upload'
    }
  },
  watch: {
    loading(newVal, oldVal) {
      if (newVal) {
        this.$refs.input.setAttribute('disabled', 'disabled')
      } else {
        this.$refs.input.removeAttribute('disabled')
      }
    }
  },
  methods: {
    reUpload() {
      let e = document.createEvent('HTMLEvents')
      e.initEvent('click', true, true)
      this.$refs.input.dispatchEvent(e)
      this.$refs.input.click()
    },
    // input change事件
    change() {
      // 判断是否正在上传
      if (this.loading) {
        return
      }
      // 判断是否是清空触发的change
      if (this.$refs.input.files.length === 0) {
        return
      }
      this.doInputUpload(this.$refs.form, this.$refs.input)
    },
    // 开始上传
    doInputUpload(form, input) {
      this.$emit('update:loading', true)
      const formData = new FormData(form)
      axios({
        url: this.url,
        method: 'post',
        data: formData,
        withCredentials: true
      })
      .then(res => {
        this.$emit('update:loading', false)
        const e = res.data
        this.$emit('success', e)
      })
      .catch(res => {
        this.$emit('update:loading', false)
        this.$emit('error', res)
        // 失败才清空表单
        this.clearForm()
      })
    },
    clearForm() {
      this.$refs.form.reset()
    }
  },
  mounted() {
  }
}
</script>
<style>
.fs-upload-warpper {
  position: relative;
  overflow: hidden;
  width: 80px;
  height: 30px;
  line-height: 30px;
  border: 1px solid #48576a;
  border-radius: 4px;
  background-color: #fffafa;
}
.fs-upload-formClass {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.fs-upload-inputClass  {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  font-size: 0; /* 解决cursor失效问题 */
  width: 100%;
  height: 100%;
  opacity: 0;
  filter: opacity(0);
  cursor: pointer;
}
</style>
