
import AboutUsView from '@/views/AboutUsView.vue'
import HomeView from '@/views/HomeView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import UserDetailsView from '@/views/UserDetailsView.vue'
import UsersView from '@/views/UsersView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: "home",
      component: HomeView
    },
    {
      path: '/about',
      component: AboutUsView
    },
    {
      path: '/users',
      component: UsersView
    },
    {
      path: '/users/:id',
      name: "user-details",
      component: UserDetailsView
    },
    // DEVE ESSERE MESSA IN FONDO
    {
      path: '/:pathMatch(.*)*',
      name: "not-found",
      component: NotFoundView
    },
  ],
})

export default router
