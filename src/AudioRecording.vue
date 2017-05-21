<template>
<div class="audio_recording_root" >
  <audio class="recorded_audio" controls controlslist="download" preload="auto">
    <source :src="url" type="audio/webm"></source>
    Your browser doesn't support the audio element :(
  </audio>
  <a :href="url" :download="recnum + '.webm'">Download</a>
</div>
</template>

<script>
export default {
  name: 'audio_recording',
  props: {
    url: String,
    recnum: Number,
  },
}
</script>

<style scoped>
</style>
