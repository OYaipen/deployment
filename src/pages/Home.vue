<template>
  <div class="home">
    <!-- Header -->
    <header class="masthead">
      <div class="container">
        <div class="intro-text">
          <div class="intro-lead-in">Hola Soy</div>
          <div class="intro-heading">Owen Yaipen</div>
          <div class="intro-lead-in">Progranador web</div>
        </div>
      </div>
    </header> 
  </div>
</template>

<script>
export default {
  layout: "default",
  name: "home",
  components: {},
  metaInfo() {
    return { title: this.$t("home") };
  }
};
</script>
