import Vue from 'vue'
import App from './App.vue'
import store from './store'
require('file-loader?name=[name].[ext]!./index.html');

const v = new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
