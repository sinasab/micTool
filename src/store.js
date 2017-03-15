import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  isRecording: false,
  current_recording: undefined,
  recording_urls: ['http://www.music.helsinki.fi/tmt/opetus/uusmedia/esim/a2002011001-e02-ulaw.wav']
}

const mutations = {
  toggleRecording: state => state.isRecording = !state.isRecording,
  updateRecordingInstance: (state, payload) => state.recordingInstance = payload
}

export default new Vuex.Store({
  state,
  mutations
});
