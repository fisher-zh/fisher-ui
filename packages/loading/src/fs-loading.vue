<template>
  <div v-show="visible" class="fs-loading__wrapper" :style="{ backgroundColor: background }">
    <div class="fs-loading-spinner" :style="{ marginTop: text === '' ? '-25px' : '-45px' }">
      <svg width="50" height="50" class="fs-loading-svg">
        <circle cx="50%" cy="50%" r="20" :stroke="color" fill="none" class="fs-loading-path"/>
      </svg>
      <p v-if="text" class="fs-loading-text" :style="{ color: color }">{{ text }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'fs-loading',
  data() {
    return {
      visible: false,
      color: '#000',
      background: '#fff',
      text: ''
    }
  },
  methods: {
    doShow() {
      this.visible = true
    },
    doClose() {
      this.visible = false
    }
  }
}
</script>
<style scoped>
.fs-loading__wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0.8;
  text-align: center;
}
.fs-loading-spinner {
  position: absolute;
  width: 100%;
  height: 50px;
  top: 50%;
  left: 0;
}
.fs-loading-svg {
  vertical-align: middle;
  animation: loading-rotate .8s linear infinite;
}
@keyframes loading-rotate
{
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
}
.fs-loading-path {
  stroke-dasharray: 90, 150;
  stroke-dashoffset: 0;
  stroke-width: 2;
  stroke-linecap: round;
}
.fs-loading-text {
  height: 20px;
  line-height: 20px;
  padding: 0;
  margin: 0;
}
</style>

