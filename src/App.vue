<template>
  <div id="app">
    <h1>{{msg}}</h1>
    <Indicator
      :is-recording="isRecording"
      @click.native="toggleRecording"
    ></Indicator>
  </div>
</template>

<script>
import Indicator from './Indicator.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Hi',
      isRecording: false
    }
  },
  components: {
    Indicator
  },
  methods: {
    toggleRecording(e) {
      this.isRecording = !this.isRecording;
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}
</style>
