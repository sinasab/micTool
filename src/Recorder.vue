<template>
<div id="recorder" :class="classObject">
  {{statusIcon}}
</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'recorder',
  computed: mapState({
    statusIcon: state => state.isRecording ? 'recording' : 'off',
    classObject: state => ({
      isRecording: state.isRecording,
      notRecording: !state.isRecording
    })
  })
}
</script>

<style scoped>
div#recorder {
  border: 1px solid black;
  width: 100px;
  text-align: center;
  display: inline-block;
}
div.isRecording {
  background-color: orangered;
}
div.notRecording {
  background-color: lightblue;
}
</style>
