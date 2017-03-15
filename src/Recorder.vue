<template>
<div id="recorder_root" >
  <button id="record_button" :class="classObject" @click="toggleRecording">
    {{statusIcon}}
  </button>

  <audio id="current_recording" controls>
    Your browser doesn't support the audio element :(
  </audio>
</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'recorder',
  data() {
    return {
      recording: []
    }
  },
  computed: mapState({
    statusIcon: state => state.isRecording ? 'recording' : 'off',
    classObject: state => ({
      isRecording: state.isRecording,
      notRecording: !state.isRecording
    })
  }),
  methods: mapMutations(['toggleRecording']),
  beforeMount() {
    console.log('ask for permission or something');
  }
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
