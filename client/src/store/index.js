import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

const state = {
  username: '',
  password: ''
}

const getters = {
  username: state => {
    return state.username
  },
  password: state => {
    return state.password
  }
}

const mutations = {
  'SET_USERNAME': (state, payload) => {
    state.username = payload
  },
  'SET_PASSWORD': (state, payload) => {
    state.password = payload
  }
}

const actions = {
  setUser ({commit}, user) {
    firebase.auth().createUserWithEmailAndPassword(user.username, user.password)
      .then(user => {
        console.log(user)
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code
        var errorMessage = error.message
        // ...
        console.log(errorCode, errorMessage)
      })
    commit('SET_USERNAME', user.username)
    commit('SET_PASSWORD', user.password)
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
