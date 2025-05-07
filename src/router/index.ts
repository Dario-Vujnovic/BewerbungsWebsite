import { RouteRecordRaw } from 'vue-router'

// Auth
import LoginView from '../views/LoginView.vue'

// Layout
import MainLayout from '../layouts/MainLayout.vue'

// Pages
import HomeView from '../views/HomeView.vue'
import ResumeView from '../views/ResumeView.vue'
import CoverLetterView from '../views/CoverLetterView.vue'
import MediaView from '../views/MediaView.vue'
import AboutView from '../views/AboutView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import CertificatesView from '../views/CertificatesView.vue'

export const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: {
      title: 'Login',
      requiresAuth: false
    }
  },
  {
    path: '/',
    component: MainLayout,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: '',
        name: 'home',
        component: HomeView,
        meta: {
          title: 'Home'
        }
      },
      {
        path: 'resume',
        name: 'resume',
        component: ResumeView,
        meta: {
          title: 'CV / Resume'
        }
      },
      {
        path: 'cover-letter',
        name: 'cover-letter',
        component: CoverLetterView,
        meta: {
          title: 'Cover Letter'
        }
      },
      {
        path: 'media',
        name: 'media',
        component: MediaView,
        meta: {
          title: 'Videos & Media'
        }
      },
      {
        path: 'about',
        name: 'about',
        component: AboutView,
        meta: {
          title: 'About Me'
        }
      },
      {
        path: 'projects',
        name: 'projects',
        component: ProjectsView,
        meta: {
          title: 'IT Projects'
        }
      },
      {
        path: 'certificates',
        name: 'certificates',
        component: CertificatesView,
        meta: {
          title: 'Certificates & Diplomas'
        }
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'home' }
  }
]