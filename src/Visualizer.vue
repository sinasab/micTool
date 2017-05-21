<template>
<canvas class="visualizer"></canvas>
</template>

<script>
import { visualize } from './oscilloscope';

window.addEventListener('load', e => {
  const canvas = document.querySelector('canvas.visualizer');
  const canvasCtx = canvas.getContext('2d');

  // draw a horizontal line in the middle of the canvas
  canvasCtx.lineWidth = 2;
  canvasCtx.strokeStyle = '#000';
  canvasCtx.moveTo(0, canvas.height / 2);
  canvasCtx.lineTo(canvas.width, canvas.height / 2);
  canvasCtx.stroke();
})

export default {
  name: 'visualizer',
  props: [
    'recording',
  ],
  watch: {
    recording: function() {
      if (this.recording !== undefined) {
        visualize(this.recording.stream);
      }
    },
  },
}

</script>

<style scoped>
canvas.visualizer {
  width: 100%;
  height: 60px;
  display: block;
  background-color: #c8c8c8;
}
</style>