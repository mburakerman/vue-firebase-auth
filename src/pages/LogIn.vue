
<template>
  <div>
    <Hero></Hero>
    <section id="logIn">
      <div class="container">
        <div class="column is-two-fifths">
          <h2 class="title is-3">Log In</h2>
          <form>
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input
                  v-model="email"
                  type="email"
                  class="input"
                  :class="{'is-danger' : !validEmail }"
                  placeholder="Email"
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input
                  v-model="password"
                  type="password"
                  class="input"
                  :class="{'is-danger' : !validPassword}"
                  placeholder="Password"
                />
              </div>
            </div>
            <div class="field">
              <p>
                If you don't have an account
                <router-link to="/sign-up">Sign Up</router-link>.
              </p>
            </div>
            <div class="field">
              <button
                class="button"
                type="button"
                :class="{ 'is-loading': logInProcess}"
                @click="logIn"
              >Log In</button>
            </div>
            <div class="field">
              <div
                v-if="this.errorText.length > 1"
                class="notification is-danger is-light"
              >{{this.errorText}}</div>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
/* eslint-disable */
import firebase from "firebase";
import Hero from "../components/Hero";

export default {
  name: "LogIn",
  components: {
    Hero
  },
  data: function() {
    return {
      email: "",
      emailRegex: /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/,
      password: "",
      validEmail: true,
      validPassword: true,
      logInProcess: false,
      errorText: ""
    };
  },
  methods: {
    logIn() {
      this.validEmail = this.emailRegex.test(this.email);
      if (this.password.length > 5) {
        this.validPassword = true;
      } else {
        this.validPassword = false;
      }

      this.$store.state.loggedIn = false;
      if (this.validEmail && this.validPassword) {
        this.logInProcess = true;
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(data => {
            this.$store.state.currentUser = firebase.auth().currentUser;
            this.logInProcess = false;
            this.$store.state.loggedIn = true;
            this.resetForm();
            this.$router.push("/");
          })
          .catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = error.credential;

            if (errorCode.length > 1) {
              this.logInProcess = false;
              this.errorText = errorMessage;
              this.resetForm();
            }
          });
      }
    },
    resetForm() {
      this.email = "";
      this.password = "";
    }
  }
};
</script>

<style>
#logIn {
  padding: 2em 0;
}
</style>