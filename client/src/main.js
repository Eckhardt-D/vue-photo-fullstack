// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import firebase from 'firebase'
import {_ID, FB_API} from './services/api'

Vue.config.productionTip = false

// Initialize Firebase
var config = {
  apiKey: FB_API,
  authDomain: 'vuelized.firebaseapp.com',
  databaseURL: 'https://vuelized.firebaseio.com',
  projectId: 'vuelized',
  storageBucket: 'vuelized.appspot.com',
  messagingSenderId: _ID
}

firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
