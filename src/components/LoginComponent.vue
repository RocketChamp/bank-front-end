<template>
    <v-card class="w-100" elevation="0">
        <v-card-title>Log in</v-card-title>
        <v-card-text class="mt-5">
            <v-text-field v-model="username" variant="outlined" label="Account number" placeholder="1111 0000 1111 0000"></v-text-field>
            <v-text-field v-model="password" variant="outlined" label="Password" type="password" placeholder="············"></v-text-field>
            <v-btn class="w-100 text-white" style="height: 56px;background-color: black;" @click="login" >Log in</v-btn>
            <div class="mt-5">
                <router-link to="/authenticate/register">Dont have an account?</router-link>
            </div>
        </v-card-text>
    </v-card>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      const userData = {
        username: this.username,
        password: this.password,
      };
      axios.post('http://localhost:8080/account/login', userData)
        .then(response => {
          if (response.status === 200) {
            // Salvăm username în localStorage
            localStorage.setItem('username', userData.username);
            this.$router.push('/dashboard');
          } else {
            // Tratați aici cazurile în care autentificarea a eșuat
          }
        })
        .catch(error => {
          console.error('ERROR:', error);
        });

    },
  },
};
</script>
