<template>
  <section class="container">
    <header>
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <router-link class="navbar-item" to="/">
            <img src="https://seeklogo.com/images/F/firebase-logo-402F407EE0-seeklogo.com.png" />
          </router-link>

          <a
            role="button"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <router-link class="navbar-item" to="/">Home</router-link>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <router-link class="button is-primary" to="/sign-up">
                  <strong>Sign up</strong>
                </router-link>
                <router-link class="button is-light" to="/log-in">Log in</router-link>
                <button
                  v-if="this.$store.state.loggedIn"
                  class="button is-light"
                  @click="logOut"
                >Log out</button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  </section>
</template>

<script>
/* eslint-disable */
import firebase from "firebase";
export default {
  name: "Header",
  methods: {
    logOut() {
      let wantLogOut = confirm("Do you want to log out?");
      if (!wantLogOut) return;
      firebase
        .auth()
        .signOut()
        .then(data => {
          console.log(data);
          this.$store.state.loggedIn = false;
          this.$router.push("/log-in");
        });
    }
  }
};
</script>