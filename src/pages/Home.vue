<template>
  <div class="home">
    <Header :title="$t('home')" message="Tecnologia" image="welcome" />

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
