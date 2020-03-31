<template>
  <div id="app">
    <Header />
    <Router-View></Router-View>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer
  }
};
</script>

<style>
body {
  color: #333;
}
</style>