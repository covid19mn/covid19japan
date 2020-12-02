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
    titleTemplate: ''
  },
  components: {
    Raw
  },
  mounted() {
    require("~/raw/index.js")
  }
}
</script>
