<template>
  <div id="app">
    <h1>ayy lmao</h1>
    <Recorder v-if="hasGetUserMedia"></Recorder>
    <Fallback v-else></Fallback>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

import Fallback from './Fallback.vue'
import Recorder from './Recorder.vue'
import { hasGetUserMedia } from './getUserMediaInterface'

export default {
  name: 'app',
  data() {
    return {
      hasGetUserMedia: hasGetUserMedia()
    }
  },
  components: {
    Fallback,
    Recorder
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
