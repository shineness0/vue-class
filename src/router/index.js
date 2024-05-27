import { createWebHistory, createRouter } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import AboutPage from '@/pages/about/AboutPage.vue'
import AboutUsPage from '@/pages/about/AboutUsPage.vue'
import UsersPage from '@/pages/UsersPage.vue'
import NotFound from '@/pages/NotFound.vue'
import ToDo from '@/pages/ToDo.vue'

const routes = [
  { path: '/', name: 'home', component: HomePage },
  {
    path: '/about',
    name: 'about',
    component: AboutPage,
    children: [{ path: 'about-us', component: AboutUsPage }]
  },
  { path: '/to-do', name: 'todo', component: ToDo },
  { path: '/users/:id', name: 'users', component: UsersPage },
  { path: '/:pathMatch(.*)*', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
