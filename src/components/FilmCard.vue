<template>
  <article class="film-card">
    <div class="film-card__poster">
      <img :src="this.film.poster" alt="">
    </div>
    <div class="film-card__content">
      <h1 class="film-card__name">
        <router-link :to="{ name: 'filmPage', params: { id: film.id } }">{{ this.film.title }}</router-link>
      </h1>
      <ul class="film-card__info">
        <li class="film-card__item">
          {{this.film.year}}, {{ this.genres }}
        </li>
        <li class="film-card__item" v-if="this.film.directors">
          Режиссёр: {{ this.directors }}
        </li>
        <li class="film-card__item" v-if="this.film.actors">
          Актеры: <span class="film-card__actors">{{ this.actors }}</span>
        </li>
      </ul>
      <div class="film-card__description" v-if="this.film.description">
        <p>{{ this.film.description }}</p>
      </div>
      <span class="film-card__time" v-if="this.film.collapse.duration">
        {{ this.duration }}
        <SvgIcon name="film" width="16" height="18" />
      </span>
    </div>
  </article>
</template>

<script>
import SvgIcon from './SvgIcon.vue'
export default {
  name: 'FilmCard',
  components: {
    SvgIcon
  },
  props: {
    film: {
      type: Object,
      required: true
    }
  },
  computed: {
    genres () {
      return this.film.genres ? this.film.genres.join(', ') : ''
    },
    directors () {
      return this.film.directors.join(', ')
    },
    actors () {
      return this.film.actors.join(', ')
    },
    duration () {
      return this.film.collapse.duration[0]
    }
  }
}
</script>

<style lang="scss">
.film-card {
  background-color: $film-card-background;
  box-shadow: 0 4px 4px rgba(#000, 0.25);
  @media (min-width: 768px) {
    display: flex;
  }
  &__poster {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    background-color: $poster-background;
    img {
      max-width: 66.6666667%;
    }
    @media (min-width: 768px) {
      max-width: 168px;
    }
  }
  &__content {
    flex-grow: 1;
    position: relative;
    padding: 32px 24px;
    overflow: hidden;
  }
  &__name {
    margin: 0;
    margin-bottom: 12px;
    font-size: 2.25rem;
    line-height: 1;
    a {
      color: #fff;
      text-decoration: none;
    }
  }
  &__info {
    margin: 0;
    padding: 0;
    font-size: 0.75rem;
    line-height: 1;
    color: $text-color-other;
    text-transform: uppercase;
    font-weight: 700;
    list-style: none;
  }
  &__item {
    margin-bottom: 8px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  &__actors {
    text-transform: initial;
    color: $actors-color;
  }
  &__description {
    margin-top: 16px;
    p {
      margin: 0;
    }
  }
  &__time {
    position: absolute;
    top: 5px;
    right: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    padding: 6px 28px 6px 18px;
    font-size: 0.75rem;
    line-height: 1;
    font-weight: 700;
    text-transform: uppercase;
    color: #000;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      width: 110%;
      height: 100%;
      background-color: $time-background;
      transform: skew(-7deg);
    }
    svg {
      margin-left: 12px;
    }
    @media (min-width: 768px) {
      top: 32px;
    }
  }
}
</style>
