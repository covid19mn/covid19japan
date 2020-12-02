<template>
  <Layout>
    <Raw />
  </Layout>
</template>

<script>
import Raw from "~/components/Raw.vue"

export default {
  metaInfo: {
    title: 'Монголын КОВИД-19 Коронавирусын Тандалт',
    titleTemplate: '',
    meta: [
      {
        key: 'og:title',
        name: 'og:title',
        content: 'Arkhangai og title',
      },
      {
        key: 'twitter:title',
        name: 'twitter:title',
        content: 'Arkhangai twitter title',
      },
    ]
  },
  components: {
    Raw
  },
  mounted() {
    require("~/raw/index.js")
  }
}
</script>
