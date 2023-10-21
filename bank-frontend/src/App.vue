<template>
  <div id="app">
    <AuthForm /> <!-- Utilizează componenta AuthForm -->
    <Dashboard /> <!-- Utilizează componenta Dashboard -->
  </div>
</template>

<script>
import AuthForm from '@/pages/AuthForm.vue' // Importă AuthForm.vue
import Dashboard from '@/pages/DashboardAccount.vue' // Importă DashboardAccount.vue
export default {
  name: 'App',
  components: {
    AuthForm,
    Dashboard
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
