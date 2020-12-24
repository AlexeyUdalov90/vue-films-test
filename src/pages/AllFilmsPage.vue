<template>
  <div class="all-films">
    <h1 class="all-films__title">Фильмы</h1>
    <Loader v-if="loading" />
    <template v-else>
      <span v-if="this.error" class="all-films__error">{{ this.error }}</span>
      <div v-else class="all-films__content">
        <div class="all-films__sort">
          <label class="all-films__sort-item checkbox" v-for="item of sorts" :key="item.value">
            <input class="visually-hidden" type="radio" :value="item.value"
              v-model="currentSortType">
            <span class="checkbox__control">
              <SvgIcon name="checkbox" width="12" height="10" />
            </span>
            {{ item.name }}
          </label>
        </div>
        <div class="all-films__item" v-for="item in sortedFilms" :key="item.id">
          <FilmCard :film="item" />
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import Loader from '../components/Loader.vue'
import SvgIcon from '../components/SvgIcon.vue'
import FilmCard from '../components/FilmCard.vue'

export default {
  name: 'AllFilms',
  components: {
    Loader,
    SvgIcon,
    FilmCard
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
    ],
    currentSortType: null
  }),
  computed: {
    ...mapState(['loading', 'error']),
    ...mapGetters(['getAllfilms']),
    sortedFilms () {
      const sortFilms = this.getAllfilms.slice()
      return sortFilms.sort((a, b) => {
        const aValue = a[this.currentSortType]
        const bValue = b[this.currentSortType]

        if (aValue < bValue) {
          return -1
        } else if (aValue > bValue) {
          return 1
        }
        return 0
      })
    }
  },
  methods: {
    ...mapActions(['getFilms'])
  },
  created () {
    this.getFilms()
  }
}
</script>

<style lang="scss">
.all-films {
  &__title {
    margin-bottom: 16px;
    font-size: 2rem;
    line-height: 1;
  }
  &__sort {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 40px;
    border-bottom: 1px solid $silver;
  }
  &__sort-item {
    margin-bottom: 18px;
    margin-right: 32px;
  }
  &__item {
    margin-bottom: 25px;
    .film-card {
      transition: 0.3s ease;
    }
    &:hover {
      .film-card {
        transform: translateY(-8px);
        box-shadow: 0 8px 20px rgba(#000, 0.35);
      }
    }
  }
  &__error {
    font-size: 2rem;
    line-height: 1;
    font-weight: 500;
    color: #fff;
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
