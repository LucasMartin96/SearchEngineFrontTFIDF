import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/HomePage.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../pages/SearchPage.vue')
    },
    {
      path: '/upload',
      name: 'upload',
      component: () => import('../pages/UploadPage.vue')
    }
  ]
})

export default router
