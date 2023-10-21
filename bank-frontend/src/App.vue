<template>
  <div id="app">
    <AuthForm /> <!-- Utilizează componenta AuthForm -->
    <Dashboard /> <!-- Utilizează componenta Dashboard -->
  </div>
</template>

<script>
import AuthForm from '@/views/AuthForm.vue' // Importă AuthForm.vue
import Dashboard from '@/components/DashboardAccount.vue' // Importă DashboardAccount.vue
import CreateAccount from "@/views/CreateAccount.vue"
export default {
  name: 'App',
  components: {
    AuthForm,
    Dashboard,
    CreateAccount
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
