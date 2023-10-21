<template>
  <div class="sidebar">
    <div class="sidebar-header">
      <h2>Meniu</h2>
    </div>
    <ul class="menu-items">
      <li>
        <RouterLink to="/dashboard">
          DashBoard
        </RouterLink>
      </li>
      <li>Transfer</li>
      <li>Transaction</li>
      <li>Accounts and Cards</li>
    </ul>
    <div class="bottom-menu">
      <p @click="navigateTo('settings')">Settings</p>
      <p @click="logout">Log Out</p>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'LeftBar',
  components: { RouterLink }
}
</script>

