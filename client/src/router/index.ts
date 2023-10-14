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
const ViewPost = () => import('../views/Admin/Posts/ViewPost.vue')
const Login = () => import('../views/Admin/Login.vue')
import store from '../store/index'
import Dashboard from '@/views/Admin/Dashboard.vue'
import AddUser from '@/views/Admin/AddUser.vue'
import NewPost from '@/views/Admin/Posts/NewPost.vue'
import AddSlider from '@/views/Admin/Slider/AddSlider.vue'
import ViewSliders from '@/views/Admin/Slider/ViewSliders.vue'
import AddDepartments from '@/views/Admin/Departments/AddDepartments.vue'
import ViewDepartments from '@/views/Admin/Departments/ViewDepartments.vue'
import AddDocument from '@/views/Admin/Documents/AddDocument.vue'
import ViewDocuments from '@/views/Admin/Documents/ViewDocuments.vue'
import DocumentCategories from '@/views/Admin/Documents/DocumentCategories.vue'
import { authService } from '@/services/auth'

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
    path: '/departments/:id',
    name: 'Departments',
    component: Departments
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/general-documents/:id',
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
    },
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: 'add-user',
        name: 'AddUser',
        component: AddUser
      },
      {
        path: 'view-posts',
        name: 'ViewPost',
        component: ViewPost
      },
      {
        path: 'new-post',
        name: 'NewPost',
        component: NewPost
      },
      {
        path: 'edit-post/:id',
        name: 'EditPost',
        component: NewPost
      },
      {
        path: 'add-slider',
        name: 'AddSlider',
        component: AddSlider
      },
      {
        path: 'view-sliders',
        name: 'ViewSliders',
        component: ViewSliders
      },
      {
        path: 'add-document',
        name: 'AddDocuments',
        component: AddDocument
      },
      {
        path: 'edit-document/:id',
        name: 'EditDocument',
        component: AddDocument
      },
      {
        path: 'view-documents',
        name: 'ViewDocuments',
        component: ViewDocuments
      },
      {
        path: 'document-categories',
        name: 'DocumentCategories',
        component: DocumentCategories
      },
      {
        path: 'add-department',
        name: 'AddDepartment',
        component: AddDepartments
      },
      {
        path: 'edit-department/:id',
        name: 'EditDepartment',
        component: AddDepartments
      },
      {
        path: 'edit-unit/:id',
        name: 'EditUnit',
        component: AddDepartments
      },
      {
        path: 'view-departments',
        name: 'ViewDepartments',
        component: ViewDepartments
      },
    ]
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
  }, 100000);
}

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters.isLoggedIn;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !isAuthenticated) {
    next('/login');
  } else if (requiresAuth && isAuthenticated) {
    const token = authService.getToken();
    if (!token) {
      store.dispatch('logout');
      next('/login');
    } else {
      next();
      // resetTimeout()
    }
  } else {
    next();
  }
});

window.addEventListener('beforeunload', () => {
  store.dispatch('clearLogoutTimeout');
});


export default router
