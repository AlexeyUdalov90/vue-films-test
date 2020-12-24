<template>
  <div class="page-layout">
    <PageHeader />
    <div class="page-layout__wrapper">
      <router-view />
    </div>
  </div>
</template>

<script>
import PageHeader from '../../components/PageHeader.vue'

export default {
  components: { PageHeader }
}
</script>

<style lang="scss">
.page-layout {
  &__wrapper {
    margin: 0 auto;
    padding: 0 10px;
    max-width: 1420px;
  }
}
</style>
