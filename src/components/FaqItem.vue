<template>
  <a href="#" class="faq-item b-bottom" @click.prevent="collapseToggle">
    <div class="collapseToggle" href="#">
      <p class="m-0">Коронавирус (COVID-19) халдвараас сэргийлэх хамгийн энгийн арга юу вэ?</p>

      <div class="collapse-icon">
        <svg v-if="!collapsed" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>

        <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minus"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
      </div>
    </div>

    <p class="soft-text" v-if="collapsed">
      Rapidiously negotiate go forward leadership skills and parallel vortals. Continually reconceptualize top-line solutions whereas just in time growth strategies. Seamlessly procrastinate competitive human capital for corporate e-commerce.
    </p>
  </a>
</template>

<script>
export default {
  data() {
    return {
      collapsed: false
    }
  },
  methods: {
    collapseToggle() {
      this.collapsed = !this.collapsed
    }
  }
}
</script>

<style lang="scss" scoped>
.faq-item {
  display: block;
  text-decoration: none;
}

.collapseToggle {
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: flex;
  & > p {
    flex-grow: 1;
  }
}

p {
  font-size: 0.875rem;
}

.collapse-icon {
  width: 24px;
  height: 24px;
}
</style>
