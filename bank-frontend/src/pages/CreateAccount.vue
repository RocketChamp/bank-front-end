<template>
  <div class="screen">
    <div class="card">
      <h1 class="text">Welcome to Your Banking Portal</h1>
      <p class="text-small">Log in to access your account</p>
      <input v-model="username" type="text" class="input" placeholder="Username" />
      <input v-model="password" type="password" class="input" placeholder="Password" />
      <button @click="createAccount" class="button">Create account</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    createAccount () {
      // Make a POST request to your backend API to create an account
      axios.post('/api/create-account', {
        username: this.username,
        password: this.password
      })
        .then(response => {
          // Handle successful account creation, e.g., redirect to login
          this.$router.push('/login')
        })
        .catch(error => {
          // Handle errors, e.g., show an error message to the user
          console.error('Account creation failed:', error)
        })
    }
  }
}
</script>

<style scoped>
.screen {
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
}

.card {
  width: 600px;
  height: 400px;
  background-color: #00a7ad;
  position: static;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.text {
  color: #f9fafe;
  font-size: 32px;
  font-family: 'serif';
  font-weight: 700;
  line-height: 38px;
  text-align: center;
  margin-top: 30px;
}

.text-small {
  color: #f9fafe;
  font-size: 16px;
  font-family: 'serif';
  line-height: 18px;
  text-align: center;
}

.input {
  width: 352px;
  height: 48px;
  padding: 10px 8px;
  border: 1px solid #cfcfd0;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: #ffffff;
  color: #707071;
  font-size: 16px;
  font-family: 'serif';
  line-height: 20px;
  outline: none;
  margin-top: 20px;
}

.button {
  width: 352px;
  height: 56px;
  padding: 0px 8px;
  border: 0;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: #030303;
  color: #ffffff;
  font-size: 16px;
  font-family: 'serif';
  font-weight: 500;
  line-height: 20px;
  outline: none;
  margin-top: 20px;
  cursor: pointer;
}
</style>
