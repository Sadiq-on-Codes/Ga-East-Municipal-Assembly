import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Projects from '../views/Projects.vue'
import Contact from '../views/Contact.vue'
import Departments from '../views/Departments.vue'
import Media from '../views/Media.vue'
import Documents from '../views/Documents.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/documents',
    name: 'Documents',
    component: Documents
  },
  {
    path: '/departments',
    name: 'Departments',
    component: Departments
  },
  {
    path: '/media',
    name: 'Media',
    component: Media
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
