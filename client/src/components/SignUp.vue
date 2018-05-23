<template>
  <div id="signUp">
    <form @submit.prevent.default>
      <div class="mx-auto col-lg-6">
        <input class="form-control mt-3" v-model="user.username" type="email" name="email" placeholder="e-mail address">
        <input aria-describedby="emailHelp" class="form-control mt-3" v-model="user.password" type="password" name="password" placeholder="password">
        <small v-bind:class="{'text-danger': hasError }" id="emailHelp" class="form-text">Your password must be longer than 8 characters, with one uppercase letter.</small>
        <button class="btn btn-success mt-3 w-100" @click="signIn" type="submit" name="button">Sign In</button>
        <button class="btn btn-success mt-3 w-100" @click="signUp" type="submit" name="button">Sign Up</button>
      </div>
    </form>
  </div>
</template>

<script type="text/javascript">
  export default {
    data: () => ({
      user: {
        username: '',
        password: '',
      },
      hasError: false
    }),
    methods: {
      signUp() {
        if(!this.user.password.match(/^(?=.*?[A-Z])(?=.*?[a-z]).{8,}$/)) {
          this.hasError = true
        } else {
          this.hasError = false
          this.$store.dispatch('setUser', this.user)
        }
      },
      signIn() {
        if(!this.user.password.match(/^(?=.*?[A-Z])(?=.*?[a-z]).{8,}$/)) {
          this.hasError = true
        } else {
          this.hasError = false
          this.$store.dispatch('signIn', this.user)
        }
      }
    },
    name: 'signUp'
  }
</script>

<style>

</style>
