import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  isRecording: false,
  recording_urls: []
}

const mutations = {
  toggleRecording: state => state.isRecording = !state.isRecording,
  addRecordingURL: (state, payload) => state.recording_urls.push(payload)
}

export default new Vuex.Store({
  state,
  mutations
});
