<template>
  <div id="app">
    <AccountDashboard /> <!-- Utilizează componenta AuthForm -->
  </div>
</template>

<script>
import AccountDashboard from '@/pages/AccountDashboard.vue' // Importă AuthForm.vue
export default {
  name: 'App',
  components: {
    AccountDashboard
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
  margin-top: 0;
}
</style>
