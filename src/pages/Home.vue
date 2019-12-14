<template>
  <div class="home">
    <b-alert :show="!$online" variant="danger">No Hay internet oe vuelve a conectar p causa</b-alert>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  layout: "free",
  name: "home",
  components: {
    HelloWorld
  },
  metaInfo() {
    return { title: this.$t("home") };
  }
};
</script>
