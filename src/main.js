import Vue from 'vue'
import App from './App'

window.Vue = Vue;

import Modal from './Modal.vue';
Vue.component( 'modal', Modal );

require( '../dist/style.css' );

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
