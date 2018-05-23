<template>
  <div id="app">
    <header>
      <span>iPhoto📷</span>
      <button v-if = "$route.name !== 'SignUp'" @click="signOut" id="logOut" type="button" class="btn btn-warning pull-right" name="button">Log Out</button>
    </header>
    <main>
      <h1 class="display-5">📷 Search beautiful, royalty free images.</h1>
      <router-view></router-view>
    </main>
    <footer class="mx-auto mt-5">
      <div class="w-50 mx-auto d-block">
        <h2 class="text-center"><small>POWERED BY</small> PEXELS API</h2>
      </div>
    </footer>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'app',
  methods: {
    signOut() {
      firebase.auth().signOut().then(function() {
         window.location = '/'
         window.localStorage.removeItem('uid');
      }).catch(function(error) {
        console.log(error)
      });
    }
  }
}
</script>

<style>

html {
  width: 100%;
  height: 100%;
}
body {
  margin: 0;
  min-height: 100%;
}

#logo {
  -webkit-transform: rotate(180deg);     /* Chrome and other webkit browsers */
  -moz-transform: rotate(180deg);        /* FF */
  -o-transform: rotate(180deg);          /* Opera */
  -ms-transform: rotate(180deg);         /* IE9 */
  transform: rotate(180deg);             /* W3C compliant browsers */

  /* IE8 and below */
  filter: progid:DXImageTransform.Microsoft.Matrix(M11=-1, M12=0, M21=0, M22=-1, DX=0, DY=0, SizingMethod='auto expand');
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height:auto;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
footer {
  right: 0;
  left:0;
  bottom: 0;
  position: relative;
}

#logOut {
  float: right;
  margin-top: -27px;
}
</style>
