<template>
  <div class="sidebar">
    <div class="sidebar-header">
      <h2>Meniu</h2>
    </div>
    <ul class="menu-items">
      <li @click="navigateTo('dashboard')">Dashboard</li>
      <li @click="navigateTo('transfer')">Transfer</li>
      <li @click="navigateTo('transaction')">Transaction</li>
      <li @click="navigateTo('accounts-and-cards')">Accounts and Cards</li>
    </ul>
    <div class="bottom-menu">
      <p @click="navigateTo('settings')">Settings</p>
      <p @click="logout">Log Out</p>
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  //width: 250px;
  //background-color: #333;
  //color: #fff;
  display: flex;
  flex-direction: column;
  height: 100vh;
  top: 0px;
  left: 0px;
  width: 280px;
  //height: 1184px;
  background-color: #f8f9fa;

}

.sidebar-header {
  background-color: #222;
  padding: 10px;
  text-align: center;
}

.menu-items {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
}

.menu-items li {
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.menu-items li:hover {
  background-color: #444;
}

.bottom-menu {
  margin-top: auto;
  text-align: center;
  padding-bottom: 20px;
}

.bottom-menu p {
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.bottom-menu p:hover {
  background-color: #444;
}
</style>
