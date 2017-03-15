<template>
<div class="audio_recording_root" >
  <audio class="recorded_audio" controls>
    <source :src="url"></source>
    Your browser doesn't support the audio element :(
  </audio>
</div>
</template>

<script>
export default {
  name: 'recorder',
  props: {
    url: String,
  },
}
</script>

<style scoped>
</style>
