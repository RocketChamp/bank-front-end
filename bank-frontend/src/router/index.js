import { createRouter, createWebHashHistory } from 'vue-router'
import DashboardAccount from '@/pages/DashboardAccount.vue' // Asigură-te că import-ul este corect
import { isUserAuthenticated } from '@/pages/AuthForm.vue'
import CreateAccount from '@/pages/CreateAccount.vue'

const routes = [
  {
    path: '/',
    component: DashboardAccount,
    // Asigură-te că aici există o verificare de autentificare înainte de a permite accesul
    beforeEnter: (to, from, next) => {
      if (isUserAuthenticated()) {
        next()
      } else {
        next('/login')
      }
    }
  },
  {
    path: '/create-account',
    name: 'create-account',
    component: CreateAccount

  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
