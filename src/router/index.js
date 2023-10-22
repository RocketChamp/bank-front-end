// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/authenticate',
    component: () => import('@/layouts/authentication/Default.vue'),
    children: [
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/views/LoginView.vue'),
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import('@/views/Home.vue'),
      },
    ],
  },
  {
    path: "/", 
    component: () => import('@/layouts/default/Default.vue'), 
    children: [
      {
        path: '', 
        name: 'Dashboard', 
        component: () => import('@/views/Dashboard.vue')
      },
      {
        path: 'dashboard', 
        name: 'Dashboard', 
        component: () => import('@/views/Dashboard.vue')
      },
      {
        path: 'transfer', 
        name: 'Transfer', 
        component: () => import('@/views/Transfer.vue')
      },
      {
        path: 'transactions', 
        name: 'Transactions', 
        component: () => import('@/views/Transactions.vue')
      },
      {
        path: 'accounts', 
        name: 'Accounts', 
        component: () => import('@/views/Accounts.vue')
      },
      {
        path: 'settings', 
        name: 'Settings', 
        component: () => import('@/views/Settings.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
