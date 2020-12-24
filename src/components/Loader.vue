<template>
  <div class="loader">
    <SvgIcon name="loader" width="136" height="136" />
  </div>
</template>

<script>
import SvgIcon from './SvgIcon.vue'

export default {
  name: 'Loader',
  components: {
    SvgIcon
  }
}
</script>

<style lang="scss">
.loader {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>
