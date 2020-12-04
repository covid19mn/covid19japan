<template>
  <div>
    <div class="faq-title-wrapper b-bottom">
      <h3>Ковид-19 халдвартай холбоотой нийтлэг асуулт, хариултууд</h3>

      <div class="faq-source desktop-only">
        <span class="soft-text">Эх сурвалж:&nbsp;</span> <a target="_blank" href="https://www.who.int/">ДЭМБ</a>
      </div>
    </div>
    <div class="faq-wrapper">
      <div class="faq-side">
        <div class="faq-nav b-bottom desktop-only">
          <a
            @click="changeMenu(item)"
            v-for="item in menus"
            :key="item"
            href="#"
            class="faq-nav-item"
            :class="item === currentMenu ? 'active' : ''"
            >
            {{ $t(item) }}
          </a>
        </div>
        <a href="#" class="faq-contact no-decoration">
          <div>
            Дэлгэрэнгүй мэдээлэл, зөвлөгөө өгөх эрүүл мэндийн байгууллагуудын
            утасны дугаарыг авах
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
        <h4>{{ $t(currentMenu) }}</h4>

        <div class="faq-items">
          <FaqItem v-for="num in [1, 2, 3, 4]" :key="num" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FaqItem from "~/components/FaqItem.vue"

export default {
  components: {
    FaqItem
  },

  data() {
    return {
      menus: ["prevention", "symptoms", "medication", "general-information"],
      currentMenu: "prevention"
    };
  },
  methods: {
    changeMenu(menu) {
      this.currentMenu = menu
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

.faq-items {
  margin-top: 2rem;
}

@media (max-width: $breakpoint-960) {
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
