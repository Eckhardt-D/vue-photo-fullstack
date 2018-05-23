import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import Hello from '@/components/Hello'
import SignUp from '@/components/SignUp'
var userId = JSON.parse(window.localStorage.getItem('uid'))

Vue.use(Router)
const checkUser = (to, from, next) => {
  if (userId != null) {
    console.log(userId)
  } else {
    userId = store.getters.user_id
  }
  console.log(userId)
  if (to.params.user_id !== userId) {
    console.log(to.params.user_id)
    next('/')
  } else {
    console.log(to.params)
    next()
  }
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      name: 'signUp',
      component: SignUp
    },
    {
      path: '/',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/user/:user_id',
      name: 'Hello',
      component: Hello,
      beforeEnter: checkUser
    }
  ]
})
