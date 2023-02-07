import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Project from '../views/Project.vue'
import Media from '../views/Media.vue'
import Contact from '../views/Contact.vue'
import Documents from '../views/Documents.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/project',
    name: 'Project',
    component: Project
  },
  {
    path: '/media',
    name: 'Media',
    component: Media
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/documents',
    name: 'Documents',
    component: Documents
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
