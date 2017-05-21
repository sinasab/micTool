<template>
  <div id="app">
    <h1>ayy lmao</h1>
    <Recorder v-if="compatibilityCheck"></Recorder>
    <Fallback v-else></Fallback>
    <AudioRecording
      v-for="(url, i) in recording_urls"
      :url="url"
      :recnum="i"
      :key="'recording_' + i">
    </AudioRecording>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

import Recorder from './Recorder.vue'
import Fallback from './Fallback.vue'
import AudioRecording from './AudioRecording.vue'

import { compatibilityCheck } from './audioInterface'

export default {
  name: 'app',
  data() {
    return {
      compatibilityCheck: compatibilityCheck()
    }
  },
  computed: mapState({
    recording_urls: state => state.recording_urls.slice().reverse()
  }),
  components: {
    Recorder,
    Fallback,
    AudioRecording
  },
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
