<template>
  <div>
    <Navbar />

    <child />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Free",
  components: {
    Navbar
  }
};
</script>

<style lang="scss">
</style>
