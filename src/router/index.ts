import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/HomePage.vue'),
      meta: {
        title: 'Home | Mate & Manuscripts'
      }
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../pages/SearchPage.vue'),
      meta: {
        title: 'Search | Mate & Manuscripts'
      }
    },
    {
      path: '/upload',
      name: 'upload',
      component: () => import('../pages/UploadPage.vue'),
      meta: {
        title: 'Upload | Mate & Manuscripts'
      }
    },
    {
      path: '/books',
      name: 'books',
      component: () => import('../pages/BooksPage.vue'),
      meta: {
        title: 'Books | Mate & Manuscripts'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title as string || 'Mate & Manuscripts'
  next()
})

export default router
