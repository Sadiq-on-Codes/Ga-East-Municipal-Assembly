import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const Home = () => import('../views/Home.vue')
const About = () => import('../views/About.vue')
const Project = () => import('../views/Project.vue')
const Media = () => import('../views/Media.vue')
const Contact = () => import('../views/Contact.vue')
const Documents = () => import('../views/Documents.vue')
const Departments = () => import('../views/Departments.vue')
const AllNews = () => import('../views/AllNews.vue')
const Gallery = () => import('../views/Gallery.vue')
const FinishedProjects = () => import('../views/Projects/FinishedProjects.vue')
const UpcomingProjects = () => import('../views/Projects/UpcomingProjects.vue')
const OngoingProjects = () => import('../views/Projects/OngoingProjects.vue')

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
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery
  },
  {
    path: '/finished-projects',
    name: 'FinishedProjects',
    component: FinishedProjects
  },
  {
    path: '/upcoming-projects',
    name: 'UpcomingProjects',
    component: UpcomingProjects
  },
  {
    path: '/ongoing-projects',
    name: 'OngoingProjects',
    component: OngoingProjects
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
