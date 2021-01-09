<template>
  <div class="all-films">
    <h1 class="all-films__title">Фильмы</h1>
    <Loader v-if="loading" />
    <template v-else>
      <span v-if="this.error" class="all-films__error">{{ this.error }}</span>
      <div v-else class="all-films__content">
        <div class="all-films__sort">
          <SortFilms />
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
import FilmCard from '../components/FilmCard.vue'
import SortFilms from '../components/SortFilms.vue'

export default {
  name: 'AllFilms',
  components: {
    Loader,
    FilmCard,
    SortFilms
  },
  computed: {
    ...mapState(['loading', 'error']),
    ...mapGetters({
      films: 'getAllfilms',
      currentSortType: 'getCurrentSortType'
    }),
    sortedFilms () {
      const sortFilms = this.films.slice()
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
    margin-bottom: 40px;
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
</style>
