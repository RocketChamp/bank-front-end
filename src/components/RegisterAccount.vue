<template>
  <v-card class="w-100" elevation="0">
    <v-card-title>Register</v-card-title>
    <v-card-text class="mt-5">
      <v-text-field v-model="userData.email" variant="outlined" label="Email"></v-text-field>
      <v-text-field v-model="userData.username" variant="outlined" label="Username"></v-text-field>
      <v-text-field v-model="userData.password" variant="outlined" label="Password" type="password" placeholder="············"></v-text-field>
      <v-text-field v-model="userData.name" variant="outlined" label="Account Name" type="text" placeholder="Name your account"></v-text-field>
      <v-select v-model="userData.type" variant="outlined" label="Account type" placeholder="Chose the type of account"
                :items="['CREDIT','DEBIT','LOAN','SAVINGS']" ></v-select>
      <v-select v-model="userData.currencyCode" variant="outlined" label="Account currency" placeholder="Currency of your account"
                :items="['AUD','CAD','CNY','EUR','GBP','JPY','USD']" ></v-select>
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
      userData: {
        email: '',
        username: '',
        password: '',
        type: '',
        name: '',
        currencyCode: '',
      }
    };
  },
  methods: {
    register() {
      axios.post('http://localhost:8080/account/create', this.userData)
        .then(response => {
          if (response.status === 200) {
            this.$router.push('/authenticate/login');
          } else {
            console.error('Empty fields')
          }
        })
        .catch(error => {
          console.error('ERROR:', error);
        });
    },
  },
};
</script>
