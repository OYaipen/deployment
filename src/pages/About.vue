<template>
  <div>
    <Header :title="$t('about')" message="asdasdasd" image="about" />
 
    <b-container>
      <h1>This is an about page</h1>
    </b-container>
  </div>
</template>
<script>
export default {
  layout: "default",
  metaInfo() {
    return { title: this.$t("about") };
  }
};
</script>