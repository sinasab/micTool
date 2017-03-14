<template>
<div>
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
      return this.isRecording ? 'on' : 'off';
    }
  }
}
</script>

<style scoped>

</style>
