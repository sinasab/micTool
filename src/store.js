import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  isRecording: false,
  recordings: []
}

const mutations = {
  toggleRecording: state => state.isRecording = !state.isRecording
}

export default new Vuex.Store({
  state,
  mutations
});
