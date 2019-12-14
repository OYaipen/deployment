<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-container>
      <b-navbar-brand :to="{ name: user ? 'home' : 'welcome' }" class="navbar-brand">{{ appName }}</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/about">About</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <locale-dropdown right />
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
import { mapGetters } from "vuex";
import LocaleDropdown from "./LocaleDropdown";

export default {
  components: {
    LocaleDropdown
  },

  data: () => ({
    appName: window.config.appName
  }),

  computed: mapGetters({
    user: "auth/user"
  }),

  methods: {
    async logout() {
      // Log out the user.
      await this.$store.dispatch("auth/logout");

      // Redirect to login.
      this.$router.push({ name: "login" });
    }
  }
};
</script>

<style scoped>
.profile-photo {
  width: 2rem;
  height: 2rem;
  margin: -0.375rem 0;
}
</style>