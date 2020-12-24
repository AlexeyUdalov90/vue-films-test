import Vue from 'vue'
import VueRouter from 'vue-router'
import LayoutPage from '../pages/layout/LayoutPage.vue'
import AllFilmsPage from '../pages/AllFilmsPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: LayoutPage,
    children: [
      {
        path: '',
        name: 'films',
        component: AllFilmsPage
      },
      {
        path: ':id',
        name: 'filmPage',
        component: () => import('../pages/FilmPage.vue')
      }
    ]
  }, {
    path: '*',
    redirect: { name: 'films' }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
