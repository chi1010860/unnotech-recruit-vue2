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
    meta: { title: 'Book List' },
    component: () =>
      import(/* webpackChunkName: "books" */ '../views/Books.vue'),
    children: [
      {
        path: ':id',
        meta: { title: 'Book Detail Page' },
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

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title
  next()
})

export default router
