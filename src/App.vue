<template>
  <div id="app">
    <h1>ayy lmao</h1>
    <Recorder
      @click.native="toggleRecording"
    ></Recorder>
  </div>
</template>

<script>
import Recorder from './Recorder.vue'
import { mapMutations } from 'vuex'

export default {
  name: 'app',
  components: {
    Recorder
  },
  methods: mapMutations(['toggleRecording'])
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
