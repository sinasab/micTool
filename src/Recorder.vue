<template>
<div id="recorder_root" >
  <Visualizer :recording="recorder"></Visualizer>
  <button id="record_button" :class="classObject" @click="buttonHandler">
    {{statusIcon}}
  </button>
</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

import Visualizer from './Visualizer.vue';
import { getStream } from './audioInterface';

export default {
  name: 'recorder',
  data() {
    return {
      recorder: undefined,
      chunks: [],
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
  components: {
    Visualizer,
  },
  methods: {
    ...mapMutations(['toggleRecording', 'addRecordingURL']),
    startRecording(e) {
      this.toggleRecording();
      this.chunks = [];
      getStream()
        .then(recorder => {
          recorder.ondataavailable = e => {
            this.chunks.push(e.data)
          }
          recorder.onstop = e => {
            const blob = new Blob(this.chunks, { 'type': 'audio/webm' });
            const audioURL = window.URL.createObjectURL(blob);
            this.addRecordingURL(audioURL);
            console.log(audioURL);
          }

          recorder.start();
          this.recorder = recorder;
        });
    },
    stopRecording(e) {
      this.toggleRecording();
      this.recorder.stream.getTracks()[0].stop();
      this.recorder.stop();
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
