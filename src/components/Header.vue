<template>
  <section id="header" class="container">
    <header>
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <router-link class="navbar-item" to="/">
            <strong>T I L</strong>
          </router-link>
          <a class="navbar-burger burger" @click="toggleMobileMenu">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div class="navbar-menu" :class="{'active' : showMobileMenu}">
          <div class="navbar-start">
            <router-link v-if="this.$store.state.currentUser" class="navbar-item" to="/">Home</router-link>
            <router-link v-if="this.$store.state.currentUser" class="navbar-item" to="/">Your List</router-link>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <router-link
                  v-if="!this.$store.state.currentUser"
                  class="button is-primary"
                  to="/sign-up"
                >
                  <strong>Sign up</strong>
                </router-link>
                <router-link
                  v-if="!this.$store.state.currentUser"
                  class="button is-light"
                  to="/log-in"
                >Log in</router-link>
              </div>
            </div>
            <div class="navbar-item has-dropdown is-hoverable">
              <a
                v-if="this.$store.state.currentUser"
                class="navbar-link"
              >{{this.$store.state.currentUser.email}}</a>

              <div class="navbar-dropdown">
                <a v-if="this.$store.state.loggedIn" class="navbar-item" @click="logOut">Log out</a>
                <hr class="navbar-divider" />
                <a class="navbar-item">Report an issue</a>
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
  data() {
    return {
      showMobileMenu: false
    };
  },
  methods: {
    toggleMobileMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },
    logOut() {
      this.$swal({
        title: "Do you want to log out?",
        text: "",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Yes",
        closeOnConfirm: true
      }).then(res => {
        if (typeof res.value == "undefined") {
          return;
        }

        firebase
          .auth()
          .signOut()
          .then(data => {
            this.$store.state.currentUser = null;
            this.$store.state.loggedIn = false;
            this.$router.push("/log-in");
          });
      });

      //let wantLogOut = confirm("Do you want to log out?");
      //if (!wantLogOut) return;
      /* */
    }
  },
  created() {
    if (firebase.auth().currentUser) {
      this.$store.state.loggedIn = true;
      this.$store.state.currentUser = firebase.auth().currentUser;
    }
  }
};
</script>

<style scoped>
.navbar-brand a {
  font-size: 30px !important;
}

.navbar-menu.active {
  display: block;
}
</style>