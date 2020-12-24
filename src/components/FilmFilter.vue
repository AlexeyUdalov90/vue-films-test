<template>
  <div class="filter">
    <label class="filter__item">
      <input class="visually-hidden" type="radio" name="filter" value="name" v-model="filter">
      <span class="filter__control">
        <SvgIcon name="checkbox" width="12" height="10" />
      </span>
      Отсортировать по названию
    </label>
    <label class="filter__item">
      <input class="visually-hidden" type="radio" name="filter" value="year" v-model="filter">
      <span class="filter__control">
        <SvgIcon name="checkbox" width="12" height="10" />
      </span>
      Отсортировать по году
    </label>
  </div>
</template>

<script>
import SvgIcon from './SvgIcon.vue'

export default {
  name: 'FilmFilter',
  components: { SvgIcon },
  data: () => ({
    filter: 'name'
  })
}
</script>

<style lang="scss">
.filter {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 40px;
  color: $filter-text-color;
  border-bottom: 1px solid currentColor;
  &__item {
    display: flex;
    align-items: center;
    margin-bottom: 18px;
    margin-right: 32px;
    line-height: 1;
    cursor: pointer;
  }
  &__control {
    flex-shrink: 0;
    position: relative;
    margin-right: 10px;
    width: 15px;
    height: 15px;
    border: 1px solid currentColor;
    transition: border-color 0.15s ease, background-color 0.15s ease;

    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      opacity: 0;
      transform: translate(-50%, -50%);
      transition: opacity 0.15s ease;
    }

    input[type="radio"]:checked ~ & {
      background-color: $control-color;
      border-color: $control-color;
      svg {
        opacity: 1;
      }
    }
  }
}
</style>
