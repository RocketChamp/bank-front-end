import { createRouter } from 'vue-router'
import DashboardAccount from '@/pages/AccountDashboard.vue'
import AuthForm from '@/pages/AuthForm.vue'
import CreateAccount from '@/pages/CreateAccount.vue'

const routes = [
  {
    path: '/dashboard',
    component: DashboardAccount
    // You can add authentication checks here to control access
  },
  {
    path: '/auth-form', // Define a route for AuthForm.vue
    component: AuthForm
  },
  {
    path: '/create-account',
    component: CreateAccount
  },
  {
    path: '/login',
    component: AuthForm
  }
]

const router = createRouter({
  history: true,
  routes: routes
})

export default router
