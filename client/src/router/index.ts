import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const Home = () => import('../views/Home.vue')
const About = () => import('../views/About.vue')
const Contact = () => import('../views/Contact.vue')
const GeneralDocuments = () => import('../views/GeneralDocuments.vue')
const Departments = () => import('../views/Departments.vue')
const AllNews = () => import('../views/AllNews.vue')
const Gallery = () => import('../views/Gallery.vue')
const FinishedProjects = () => import('../views/Projects/FinishedProjects.vue')
const UpcomingProjects = () => import('../views/Projects/UpcomingProjects.vue')
const OngoingProjects = () => import('../views/Projects/OngoingProjects.vue')
const SinglePost = () => import('../views/SinglePost.vue')
const NotFound = () => import('../views/NotFound.vue')
const AdminPage = () => import('../views/Admin/AdminPage.vue')
const Login = () => import('../views/Admin/Login.vue')
import store from '../store/index'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
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
    path: '/departments',
    name: 'Departments',
    component: Departments
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/general-documents',
    name: 'GeneralDocuments',
    component: GeneralDocuments
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
  {
    path: '/single-post/:id',
    name: 'SinglePost',
    component: SinglePost
  },
  {
    path: '/admin',
    name: 'AdminPage',
    component: AdminPage,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

let timeoutId: ReturnType<typeof setTimeout>;

function resetTimeout(): void {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
    store.dispatch('logout');
    router.push('/login');
  }, 60000); // 1 minute
}

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters.isLoggedIn;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !isAuthenticated) {
    next('/login');
    resetTimeout();
  } else {
    next();
  }
});

window.addEventListener('beforeunload', () => {
  store.dispatch('clearLogoutTimeout');
});


export default router
