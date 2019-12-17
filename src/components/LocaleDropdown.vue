<template>
  <div>
    <b-nav-item-dropdown id="dropdown-1" :text="locale" left>
      <b-dropdown-item
        v-for="value in locales"
        :key="value"
        @click.prevent="setLocale(value)"
      >{{ value }}</b-dropdown-item>
    </b-nav-item-dropdown>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { loadMessages } from "~/plugins/i18n";

export default {
  computed: mapGetters({
    locale: "lang/locale",
    locales: "lang/locales"
  }),

  methods: {
    setLocale(locale) {
      if (this.$i18n.locale !== locale) {
        loadMessages(locale);

        this.$store.dispatch("lang/setLocale", { locale });
      }
    }
  }
};
</script>
