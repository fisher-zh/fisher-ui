<template>
  <div v-show="visible" class="mbui-message-box__wrapper">
    <div @click="doClose" class="mbui-mask"></div>
    <div class="mbui-message-box">
      <div @click="doClose('close')" class="mbui-message-box__close"></div>
      <div class="mbui-message-box__title">{{ title }}</div>
      <div class="mbui-message-box__msg">{{ msg }}</div>
      <div class="mbui-message-box__btns">
        <button @click="doClose('cancel')" class="mbui-btn">{{ cancelText }}</button>
        <button @click="doClose('confirm')" class="mbui-btn">{{ confirmText }}</button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'message-box',
    data() {
      return {
        title: 'this is title',
        msg: 'this is test message',
        confirmText: 'confirm',
        cancelText: 'cancel',
        visible: false,
        callback: null
      }
    },
    methods: {
      doShow() {
        this.visible = true
      },
      doClose(action) {
        this.visible = false
        this.callback(action)
      }
    }
  }
</script>
<style>
.mbui-message-box__wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
}
.mbui-message-box__wrapper:after {
  content: "";
  display: inline-block;
  height: 100%;
  width: 0;
  vertical-align: middle;
}
.mbui-message-box {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  background-color: #fff;
  width: 420px;
  box-sizing: border-box;
  padding: 20px;
  border-radius: 4px;
  font-size: 16px;
  text-align: left;
  overflow: hidden;
}
.mbui-message-box__close {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 25px;
  height: 25px;
  background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTA3ODY2MTc4Nzg1IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIzMjAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTEyIDU0Mi4xNjUzMzNsMzI2LjIyOTMzMyAzMjYuMjcyYTIxLjMzMzMzMyAyMS4zMzMzMzMgMCAwIDAgMzAuMjA4LTMwLjIwOEw1NDIuMTY1MzMzIDUxMmwzMjYuMjcyLTMyNi4yMjkzMzNhMjEuMzMzMzMzIDIxLjMzMzMzMyAwIDAgMC0zMC4yMDgtMzAuMjA4TDUxMiA0ODEuODM0NjY3IDE4NS43NzA2NjcgMTU1LjU2MjY2N2EyMS4zMzMzMzMgMjEuMzMzMzMzIDAgMSAwLTMwLjIwOCAzMC4yMDhMNDgxLjgzNDY2NyA1MTJsLTMyNi4yNzIgMzI2LjIyOTMzM2EyMS4zMzMzMzMgMjEuMzMzMzMzIDAgMCAwIDMwLjIwOCAzMC4yMDhMNTEyIDU0Mi4xNjUzMzN6IiBmaWxsPSIjNTE1MTUxIiBwLWlkPSIyMzIxIj48L3BhdGg+PC9zdmc+) no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
}
.mbui-message-box__title {
  font-size: 20px;
  height: 24px;
  color: #333;
}
.mbui-message-box__msg {
  margin: 20px 0;
  font-size: 16px;
  color: #48576a;
}
.mbui-message-box__btns {
  position: relative;
  text-align: right;
  height: 30px;
}
.mbui-btn {
  width: 80px;
  height: 30px;
  border: 1px solid #48576a;
  border-radius: 4px;
  outline: none;
  background-color: #fffafa;
  cursor: pointer;
}
.mbui-mask {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  z-index: -1;
}
</style>
