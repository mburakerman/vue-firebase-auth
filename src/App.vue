<template>
  <div id="app">
    <Header />
    <Router-View></Router-View>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header
  }
};
</script>