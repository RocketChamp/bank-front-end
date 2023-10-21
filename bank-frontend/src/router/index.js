import { createRouter, createWebHashHistory } from 'vue-router'
import CreateAccount from '@/pages/CreateAccount.vue'

const routes = [
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
