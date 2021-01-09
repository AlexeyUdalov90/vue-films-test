<template>
  <div class="sort">
    <label class="sort__item checkbox" v-for="item of sorts" :key="item.value">
      <input class="visually-hidden" type="checkbox"
        :value="item.value"
        :checked="currentSortType === item.value"
        @change="changeSortTypeHandler">
      <span class="checkbox__control">
        <SvgIcon name="checkbox" width="12" height="10" />
      </span>
      {{ item.name }}
    </label>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import SvgIcon from './SvgIcon.vue'

export default {
  name: 'SortFilms',
  components: {
    SvgIcon
  },
  data: () => ({
    sorts: [
      {
        name: 'Отсортировать по названию',
        value: 'title'
      },
      {
        name: 'Отсортировать по году',
        value: 'year'
      }
    ]
  }),
  computed: {
    ...mapGetters({
      currentSortType: 'getCurrentSortType'
    })
  },
  methods: {
    ...mapMutations({
      changeSortType: 'CHANGE_SORT_TYPE'
    }),
    changeSortTypeHandler (evt) {
      const type = evt.target.value

      this.changeSortType(this.currentSortType !== type ? type : null)
    }
  }
}
</script>

<style lang="scss">
.sort {
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid $silver;
  &__item {
    margin-bottom: 18px;
    margin-right: 32px;
  }
}
.checkbox {
  display: flex;
  align-items: center;
  line-height: 1;
  color: $filter-text-color;
  cursor: pointer;
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

    input[type="checkbox"]:checked ~ & {
      background-color: $control-color;
      border-color: $control-color;
      svg {
        opacity: 1;
      }
    }
  }
}
</style>
