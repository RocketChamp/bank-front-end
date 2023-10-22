<template>
  <v-card class="w-100" elevation="0">
    <v-card-title>Log in</v-card-title>
    <v-card-text class="mt-5">
      <v-text-field v-model="userDate.username" variant="outlined" label="Username"
                    placeholder="1111 0000 1111 0000"></v-text-field>
      <v-text-field v-model="userDate.password" variant="outlined" label="Password" type="password"
                    placeholder="············"></v-text-field>
      <v-btn class="w-100 text-white" style="height: 56px;background-color: black;" @click="login">Log in</v-btn>
      <div class="mt-5">
        <router-link to="/authenticate/create">Don't have an account?</router-link>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      userDate: {
        username: '',
        password: '',
      }
    };
  },
  methods: {
    login() {
      axios.post('http://localhost:8080/account/login', this.userDate)
        .then(response => {
          if (response.status === 200) {
            this.$router.push('/dashboard');
          } else {
            console.error('Authentication failed');
          }
        })
        .catch(error => {
          console.error('ERROR:', error);
        });
    },
  },
};
</script>
