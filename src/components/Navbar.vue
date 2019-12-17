<template>
  <b-navbar toggleable="lg" type="dark" id="mainNav">
    <b-container>
      <b-navbar-brand :to="{ name: user ? 'home' : 'welcome' }" class="navbar-brand">{{ appName }}</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" class="navbar-toggler-right">
        {{$t('menu')}}
        <fa icon="bars" fixed-width />
      </b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <locale-dropdown class="nav-item"  />
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/about">{{$t('about')}}</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
import $ from "jquery";
window.$ = $;
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
  },
  mounted() {
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html, body").animate(
            {
              scrollTop: target.offset().top - 54
            },
            1000,
            "easeInOutExpo"
          );
          return false;
        }
      }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function() {
      $(".navbar-collapse").collapse("hide");
    });

    // // Activate scrollspy to add active class to navbar items on scroll
    // $("body").scrollspy({
    //   target: "#mainNav",
    //   offset: 56
    // });

    // // Collapse Navbar
    // var navbarCollapse = function() {
    //   if ($("#mainNav").offset().top > 100) {
    //     $("#mainNav").addClass("navbar-shrink");
    //   } else {
    //     $("#mainNav").removeClass("navbar-shrink");
    //   }
    // };
    // // Collapse now if page is not at top
    // navbarCollapse();
    // // Collapse the navbar when page is scrolled
    // $(window).scroll(navbarCollapse);
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