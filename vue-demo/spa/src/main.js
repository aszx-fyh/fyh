import Vue from 'vue'
import fly from './assets/js/httpconfig'
Vue.prototype.$http=fly;
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})
