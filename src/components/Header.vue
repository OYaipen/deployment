<template>
  <header class="masthead" :class="image">
    <div class="overlay"></div>
    <b-container>
      <b-row>
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="site-heading">
            <h1>{{title}}</h1>
            <span class="subheading">{{message}}</span>
          </div>
        </div>
      </b-row>
    </b-container>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: String,
    message: String,
    image: String
  }
};
</script>

<style>
</style>