<template>
    <v-card class="w-100" elevation="0">
        <v-card-title>Register</v-card-title>
        <v-card-text class="mt-5">
            <v-text-field v-model="username" variant="outlined" label="Account number" placeholder="1111 0000 1111 0000"></v-text-field>
            <v-text-field v-model="password" variant="outlined" label="Password" type="password" placeholder="············"></v-text-field>
            <v-btn class="w-100 text-white" style="height: 56px;background-color: black;" @click="register">Register</v-btn>
          <div class="mt-5">
                <router-link to="/authenticate/login">Already have an account?</router-link>
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
    register() {
      const userData = {
        username: this.username,
        password: this.password,
      };
      axios.post('http://localhost:8080/user/createNewUser', userData)
        .then(response => {
          console.log('Registration successful!', response.data);
          this.$router.push('/authenticate/login');
        })
        .catch(error => {
          console.error('ERROR:', error);
        });
    },
  },
};
</script>
