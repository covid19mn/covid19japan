<template>
  <div>
    <div class="faq-title-wrapper b-bottom">
      <h3>{{ $t("faq-title") }}</h3>

      <div class="faq-source">
        <span class="soft-text">{{ $t("source") }}:&nbsp;</span>
        <a target="_blank" href="https://www.who.int/">{{ $t("WHO") }}</a>
      </div>
    </div>
    <div class="faq-wrapper">
      <div class="faq-side">
        <div class="faq-nav b-bottom desktop-only">
          <a
            @click="changeCategory(item)"
            v-for="item in categories"
            :key="item"
            href="#"
            class="faq-nav-item"
            :class="item === currentCategory ? 'active' : ''"
          >
            {{ $t(item) }}
          </a>
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
      </div>
      <div class="faq-main">
        <h4>{{ $t(currentCategory) }}</h4>

        <div class="questions">
          <Question
            v-for="question in questions"
            :key="question.id"
            v-bind="question"
          />
        </div>
      </div>
    </div>
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
      categories: ["prevention", "symptoms", "medication", "general-information"],
      currentCategory: "prevention"
    };
  },
  methods: {
    changeCategory(category) {
      this.currentCategory = category;
    }
  },
  computed: {
    questions() {
      return this.$static.allQuestion.edges.map(e => {
        return e.node;
      }).filter(question => {
        return question.category === this.currentCategory && question.locale === this.$i18n.locale
      }).sort((q1, q2) => (q1.order - q2.order) ? -1 : 1);
    }
  }
};
</script>

<style lang="scss" scoped>
.faq-title-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}

.faq-side {
  min-width: 256px;
  max-width: 256px;
}

.faq-nav {
  margin-bottom: 1rem;
  padding-bottom: 1rem;
}

.faq-nav-item {
  display: block;
  padding: 0.5rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;

  &.active {
    font-weight: 500;
    background: #f1f1f1;
  }
}

.faq-contact {
  display: flex;
  margin-top: 1rem;
  background: #f7f7f7;
  border-radius: 8px;
  font-size: 0.75rem;
  padding: 1rem;
}

.faq-source {
  font-size: 0.875rem;
}

.faq-wrapper {
  display: flex;
}

.faq-main {
  margin-left: 3.5rem;
  flex-grow: 1;
}

.questions {
  margin-top: 1rem;
}

@media (max-width: $breakpoint-960) {
  .faq-source {
    font-size: 0.8em;
    margin-bottom: 0.5rem;
  }

  .faq-title-wrapper {
    align-items: flex-start;
    flex-direction: column-reverse;
  }

  .faq-wrapper {
    flex-direction: column-reverse;
  }

  .faq-main {
    margin-left: 0;
  }

  .faq-side {
    max-width: none;
  }
}

@media (max-width: $breakpoint-960) {
  .desktop-only {
    display: none !important;
  }
}

h4 {
  font-size: 1rem;
  margin: 0;
}
</style>
