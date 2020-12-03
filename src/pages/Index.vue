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
        key: 'description',
        name: 'description',
        content: 'Монголын КОВИД-19 Коронавирусын Тархалтын Шууд Мэдээлэл',
      },
      {
        key: 'twitter:title',
        name: 'twitter:title',
        content: 'Монголын КОВИД-19 Коронавирусын Тандалт',
      },
      {
        key: 'twitter:description',
        name: 'twitter:description',
        content: 'Монголын КОВИД-19 Коронавирусын Тархалтын Шууд Мэдээлэл',
      },
      {
        key: 'og:title',
        name: 'og:title',
        content: 'Монголын КОВИД-19 Коронавирусын Тандалт',
      },
      {
        key: 'og:type',
        name: 'og:type',
        content: 'website',
      },
      {
        key: 'og:url',
        name: 'og:url',
        content: 'https://covid19mongolia.mn/',
      },
      {
        key: 'og:image',
        name: 'og:image',
        content: 'https://covid19mongolia.mn/static/map.png',
      },
      {
        key: 'og:description',
        name: 'og:description',
        content: 'Монголын КОВИД-19 Коронавирусын Тархалтын Шууд Мэдээлэл',
      },
    ]
  },
  components: {
    Raw
  }
}
</script>
