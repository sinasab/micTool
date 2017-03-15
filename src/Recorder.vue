<template>
<div id="recorder_root" >
  <button id="record_button" :class="classObject" @click="buttonHandler">
    {{statusIcon}}
  </button>
  <audio id="current_recording" controls>
    <source></source>
    Your browser doesn't support the audio element :(
  </audio>
</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { initializeStream } from './getUserMediaInterface'

export default {
  name: 'recorder',
  data() {
    return {
      stream: undefined,
    }
  },
  computed: mapState({
    statusIcon: state => state.isRecording ? 'recording' : 'off',
    classObject: state => ({
      isRecording: state.isRecording,
      notRecording: !state.isRecording
    }),
    buttonHandler (state) {
      return state.isRecording ? this.stopRecording : this.startRecording;
    },
  }),
  methods: {
    ...mapMutations(['toggleRecording']),
    startRecording(e) {
      this.toggleRecording();
      this.stream = startStream();
      console.log('started recording');
    },
    stopRecording(e) {
      this.toggleRecording();
      console.log('stopped recording');
    }
  },
}
</script>

<style scoped>
button#record_button {
  border: 1px solid black;
  text-align: center;
  display: inline-block;
  width: 100px;
  height: 50px;
}
button#record_button.isRecording {
  background-color: orangered;
}
button#record_button.notRecording {
  background-color: #71ff71;
}
</style>
