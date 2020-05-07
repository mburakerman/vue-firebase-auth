<template>
  <div>
    <Hero></Hero>
    <section id="signUp">
      <div class="container">
        <div class="column is-two-fifths">
          <h2 class="title is-3">Sign Up</h2>
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
                <small>Password should be at least 6 characters.</small>
              </div>
            </div>
            <div class="field">
              <p>
                If you have an account
                <router-link to="/log-in">Log In</router-link>.
              </p>
            </div>
            <div class="field">
              <button
                class="button"
                :class="{ 'is-loading': signUpProcess}"
                type="button"
                @click="signUp"
              >Sign Up</button>
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
  name: "SignUp",
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
      signUpProcess: false,
      errorText: ""
    };
  },
  methods: {
    signUp() {
      this.validEmail = this.emailRegex.test(this.email);
      if (this.password.length > 5) {
        this.validPassword = true;
      } else {
        this.validPassword = false;
      }

      if (this.validEmail && this.validPassword) {
        this.signUpProcess = true;
        // save person
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(data => {
            this.signUpProcess = false;
            this.$router.push("/");
            this.$swal(
              "Your account successfully created!",
              "Now you are logged in.",
              "success"
            );
          })
          .catch(function(error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = error.credential;

            if (errorCode.length > 1) {
              this.signUpProcess = false;
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
#signUp {
  padding: 2em 0;
}
</style>