<template>
  <div class="bg-white" style="padding:1rem 0">
    <Layout>
    <div class="container">
      <div class="faq-main" v-for="category in categories" :key="category">
        <h4>{{ $t(category) }}</h4>

        <div class="questions">
          <Question
            v-for="question in questions(category)"
            :key="question.id"
            v-bind="question"
            />
        </div>
      </div>

      <a href="https://covid19.mohs.mn/p/cat/post/52" target="_blank" class="faq-contact no-decoration">
        <div>
          {{ $t("health-organization-more-info") }}
        </div>
        <div>
          <div style="margin-left:1rem">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-external-link"
              >
              <path
                d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                ></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </div>
        </div>
      </a>

      <div class="b-bottom faq-source py-2">
        <span class="soft-text">{{ $t("source") }}:&nbsp;</span>
        <a target="_blank" href="https://www.who.int/">{{ $t("WHO") }}</a>
      </div>
    </div>
    </Layout>
  </div>
</template>

<static-query>
query {
  allQuestion {
    edges {
      node {
        id
        title
        content
        category
        locale
      }
    }
  }
}
</static-query>

<script>
import Question from "~/components/Question.vue";

export default {
  components: {
    Question
  },

  data() {
    return {
      categories: [
        "prevention",
        "symptoms",
        "medication",
        "general-information"
      ]
    };
  },

  methods: {
    questions(category) {
      return this.$static.allQuestion.edges
        .map(e => {
          return e.node;
        })
        .filter(question => {
          return (
            question.category === category &&
            question.locale === this.$i18n.locale
          );
        })
        .sort((q1, q2) => (q1.order - q2.order ? -1 : 1));
    }
  }
};
</script>

<style lang="scss" scoped>
h4 {
  font-size: 1rem;
  font-weight: 500;
}

.faq-source {
  font-size: 0.875rem;
}
</style>
