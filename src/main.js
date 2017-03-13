import Vue from 'vue'
import App from './App.vue'
require('file-loader?name=[name].[ext]!./index.html');

const v = new Vue({
  el: '#app',
  render: h => h(App)
})
