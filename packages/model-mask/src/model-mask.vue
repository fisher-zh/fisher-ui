<template>
  <div @click="doClose" v-show="value" class="mbui-mask"></div>
</template>
<script>
export default {
  name: 'model-mask',
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    doClose() {
      this.isShow = false
    },
    doShow() {
      this.isShow = true
    }
  }
}
</script>
<style scoped>
.mbui-mask {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: .5;
  background: #000;
}
</style>
