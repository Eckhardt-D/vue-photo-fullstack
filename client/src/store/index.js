import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

const state = {
  username: '',
  password: '',
  user_id: ''
}

const getters = {
  username: state => {
    return state.username
  },
  password: state => {
    return state.password
  },
  user_id: state => {
    return state.user_id
  }
}

const mutations = {
  'SET_USERNAME': (state, payload) => {
    state.username = payload
  },
  'SET_PASSWORD': (state, payload) => {
    state.password = payload
  },
  'USER_ID': (state, payload) => {
    state.user_id = payload
  }
}

const actions = {
  signIn ({commit}, user) {
    var userFind = firebase.auth().currentUser

    if (userFind) {
      // User is signed in.
      commit('USER_ID', userFind.uid)
      window.localStorage.setItem('uid', JSON.stringify(userFind.uid))
    } else {
      // No user is signed in.
      alert('Try again')
    }
    console.log('here')
    commit('SET_USERNAME', user.username)
    commit('SET_PASSWORD', user.password)
    firebase.auth().signInWithEmailAndPassword(user.username, user.password)
      .then(() => {
        window.location = `/user/${userFind.uid}`
      })
      .catch(function (error) {
      // Handle Errors here.
        alert(`${error.code} ${error.message}`)
      // ...
      })
  },
  setUser ({commit}, user) {
    firebase.auth().createUserWithEmailAndPassword(user.username, user.password)
      .then(user => {
        window.location = `/user/${user.user.uid}`
        console.log(user)
        commit('USER_ID', user.user.uid)
        window.localStorage.setItem('uid', JSON.stringify(user.user.uid))
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
