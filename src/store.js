import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  isRecording: false,
  recordingInstance: undefined,
  recordings: []
}

const mutations = {
  toggleRecording: state => state.isRecording = !state.isRecording,
  updateRecordingInstance: (state, payload) => state.recordingInstance = payload
}

export default new Vuex.Store({
  state,
  mutations
});
