<template>
  <div class="lang-picker">
    <span class="lang-picker-languages"> </span>
    <a
      href="#"
      @click.prevent="switchLanguage(language.id)"
      class="lang-picker-button"
      :class="currentLanguage === language.id ? 'active' : '' "
      v-for="language in languages"
      :key="language.id"
      >{{ language.name }}</a
    >
  </div>
</template>

<script>
import { LANGUAGE_NAMES, LANGUAGES } from "~/raw/i18n/index.js";

export default {
  data() {
    return {
      languages: LANGUAGES.map((l, index) => ({
        id: l,
        name: LANGUAGE_NAMES[index]
      }))
    };
  },
  methods: {
    switchLanguage(lang) {
      this.$router.push({
        path: this.$tp(this.$route.path, lang, true)
      });

      let event = new CustomEvent("languageChange", { detail: { lang } });
      document.dispatchEvent(event);
    }
  },
  computed: {
    currentLanguage() {
      return this.$i18n.locale;
    }
  }
};
</script>
