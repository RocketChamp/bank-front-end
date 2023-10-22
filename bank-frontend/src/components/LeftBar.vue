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
      <router-link to = "/login">Logout</router-link>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    // Alte metode

    logout () {
      // Emite un eveniment pentru a indica că utilizatorul dorește să se deconecteze
      this.$emit('logout')
    }
  }
}
</script>
<style scoped>
.sidebar {
  //width: 250px;
  //background-color: #333;
  //color: #fff;
  display: flex;
  flex-direction: column;
  height: 99vh;
  top: 0;
  left: 0;
  width: 280px;
  //height: 1184px;
  background-color: #f8f9fa;

export default {
  name: 'LeftBar',
  components: { RouterLink }
}
</script>

.sidebar-header {
  background-color: #f8f9fa;
  padding: 10px;
  text-align: center;
}

.menu-items {
  list-style: none;
  padding-left: 4vh;
  margin: 0;
  display: flex;
  flex-direction: column;
  text-align: left;
}

.menu-items li {
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.menu-items li:hover {
  background-color: #00a7ad;
}

.bottom-menu {
  margin-top: auto;
  text-align: left;
  padding-bottom: 5px;
  padding-left: 4vh;
}

.bottom-menu p {
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.bottom-menu p:hover {
  background-color: #00a7ad;
}
</style>
