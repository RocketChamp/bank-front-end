import { createRouter, createWebHashHistory } from 'vue-router'
import DashboardAccount from '@/pages/AccountDashboard.vue'
import AuthForm from '@/pages/AuthForm.vue'
import CreateAccount from '@/pages/CreateAccount.vue'

const routes = [
  {
    path: '/',
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
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
