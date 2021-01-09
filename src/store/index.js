import Vue from 'vue'
import Vuex from 'vuex'
import { getAllMovies } from '../requests.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: true,
    films: [],
    currentSortType: null,
    error: ''
  },
  getters: {
    getAllfilms: state => state.films,
    getFilmToId: state => id => state.films.find(({ id: filmId }) => filmId === id),
    getCurrentSortType: state => state.currentSortType
  },
  mutations: {
    CHANGE_LOADING (state, payload) {
      state.loading = payload
    },
    SET_FILMS (state, payload) {
      state.films = payload
    },
    CHANGE_ERROR (state, payload) {
      state.error = payload
    },
    CHANGE_SORT_TYPE (state, payload) {
      state.currentSortType = payload
    }
  },
  actions: {
    async getFilms ({ commit }) {
      commit('CHANGE_LOADING', true)
      await getAllMovies()
        .then((response) => {
          commit('CHANGE_ERROR', '')
          commit('SET_FILMS', response.data)
          commit('CHANGE_LOADING', false)
        })
        .catch((err) => {
          commit('CHANGE_LOADING', false)
          commit('CHANGE_ERROR', err)
        })
    }
  }
})
