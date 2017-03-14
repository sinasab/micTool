<template>
<div id="indicator" :class="classObject">
  {{statusIcon}}
</div>
</template>

<script>
export default {
  name: 'indicator',
  props: {
    isRecording: { type: Boolean, default: false }
  },
  computed: {
    statusIcon() {
      return this.isRecording ? 'recording' : 'off';
    },
    classObject() {
      return {
        isRecording: this.isRecording,
        notRecording: !this.isRecording
      };
    }
  }
}
</script>

<style scoped>
div#indicator {
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
