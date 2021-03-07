import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/books',
  },
  {
    path: '/books',
    name: 'Books',
    component: () =>
      import(/* webpackChunkName: "books" */ '../views/Books.vue'),
    children: [
      {
        path: ':id',
        component: () =>
          import(
            /* webpackChunkName: "detail" */ '../components/BookDetail.vue'
          ),
      },
    ],
  },
]

const router = new VueRouter({
  routes,
})

export default router
