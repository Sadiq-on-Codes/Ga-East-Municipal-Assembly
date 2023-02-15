import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const Home = () => import('../views/Home.vue')
const About = () => import('../views/About.vue')
const Project = () => import('../views/Project.vue')
const Media = () => import('../views/Media.vue')
const Contact = () => import('../views/Contact.vue')
const Documents = () => import('../views/Documents.vue')
const AllNews = () => import('../views/AllNews.vue')

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
  {
    path: '/all-news',
    name: 'AllNews',
    component: AllNews
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
