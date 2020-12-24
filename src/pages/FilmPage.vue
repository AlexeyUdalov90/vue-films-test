<template>
  <div class="film">
    <div class="film__top">
      <router-link class="film__back" :to="{ name: 'films' }">
        <SvgIcon name="arrow" width="12" height="20" />
        Назад к списку
      </router-link>
    </div>
    <Loader v-if="this.loading" />
    <template v-else>
      <span v-if="this.error" class="film__error">{{ this.error }}</span>
      <FilmCard v-else :film="film" />
    </template>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Loader from '../components/Loader.vue'
import SvgIcon from '../components/SvgIcon.vue'
import FilmCard from '../components/FilmCard.vue'
import { getMovie } from '../requests.js'

export default {
  name: 'FilmPage',
  components: { FilmCard, Loader, SvgIcon },
  data: () => ({
    film: {}
  }),
  beforeMount () {
    const { id: filmId } = this.$route.params
    const film = this.$store.getters.getFilmToId(filmId)

    if (film) {
      this.film = film
    } else {
      this.getFilm(filmId)
    }
  },
  computed: {
    ...mapState(['loading', 'error'])
  },
  methods: {
    ...mapMutations({
      changeLoading: 'CHANGE_LOADING',
      changeError: 'CHANGE_ERROR'
    }),
    getFilm (id) {
      this.changeLoading(true)
      getMovie(id)
        .then((response) => {
          const filmData = response.data

          if (filmData) {
            this.film = filmData
          } else {
            this.changeError('К сожалению, по вашему запросу ничего не найдено...')
          }
          this.changeLoading(false)
        })
    }
  }
}
</script>

<style lang="scss">
.film {
  &__top {
    margin-bottom: 40px;
    padding-bottom: 22px;
    border-bottom: 1px solid $silver;
  }
  &__back {
    display: flex;
    align-items: center;
    font-size: 1.25rem;
    line-height: 1;
    color: $link-color;
    text-decoration: underline;
    svg {
      margin-right: 20px;
    }
    &:hover {
      text-decoration: none;
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
