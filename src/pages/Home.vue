<template>
  <section id="home">
    <div class="container">
      <div class="column">
        <h1 class="title">What did you learn today?</h1>
        <p class="text">
          <small>{{currentDate}}</small>
        </p>
        <textarea class="textarea" rows="6" placeholder="Type here"></textarea>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      currentDate: new Date()
    };
  }
};
</script>

<style>
#home .textarea {
  margin-bottom: 5em;
}
</style>