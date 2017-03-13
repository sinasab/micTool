import Vue from 'vue'
import App from './App.vue'
require('file-loader?name=[name].[ext]!./index.html');

new Vue({
  el: '#app',
  render: h => h(App)
})
