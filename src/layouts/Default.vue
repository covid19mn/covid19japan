<template>
  <div class="layout" style="z-index:1000">
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss" scoped>
.layout {
  // this hack prevents unstyled content flickering
  z-index: -10 !important;
}
</style>
