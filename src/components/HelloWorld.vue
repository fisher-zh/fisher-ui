<template>
  <div class="hello" style="height: 1000px;">
    <h1 @click="alert2">{{ msg }}</h1>
    <h2 @click="alertMessage">click me, test messagebox</h2>
    <fs-upload url="https://jsonplaceholder.typicode.com/posts/"></fs-upload>
    <div v-loading="true" style="width: 200px; height: 200px;">loading</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      show: true
    }
  },
  methods: {
    alertMessage () {
      this.$messageBox({
        title: '123',
        msg: '456',
        confirmText: 'confirm1',
        cancelText: 'cancel1'
      })
      .then(res => {
        console.log(res)
      })
    },
    alert2 () {
      this.$messageBox({
        msg: '456'
      })
      .then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
