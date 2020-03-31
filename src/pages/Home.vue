<template>
  <section id="home">
    <div class="container">
      <div class="column">
        <h2 class="title is-3">What did you learn today?</h2>
        <p class="text">
          <small>{{currentDate}}</small>
        </p>
        <textarea class="textarea" rows="5" placeholder="Type here"></textarea>
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