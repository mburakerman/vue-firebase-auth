<template>
  <section id="signUp">
    <div class="container">
      <div class="column is-two-fifths">
        <h1 class="title">Sign Up</h1>
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
</template>

<script>
/* eslint-disable */
import firebase from "firebase";

export default {
  name: "SignUp",
  components: {},
  data: function() {
    return {
      email: "",
      emailRegex: /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/,
      password: "",
      validEmail: false,
      validPassword: false,
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
            console.log(data);
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