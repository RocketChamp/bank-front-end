<template>
  <v-card class="w-100" elevation="0">
    <v-card-title>Create</v-card-title>
    <v-card-text class="mt-5">
      <v-text-field v-model="userData.firstName" variant="outlined" label="First name"></v-text-field>
      <v-text-field v-model="userData.lastName" variant="outlined" label="Last name"></v-text-field>
      <v-text-field v-model="userData.address" variant="outlined" label="Address"></v-text-field>
      <v-text-field v-model="userData.email" variant="outlined" label="Email"></v-text-field>
      <v-text-field v-model="userData.phone" variant="outlined" label="Phone"></v-text-field>
      <v-text-field v-model="userData.taxCode" variant="outlined" label="Tax code"></v-text-field>
      <v-btn class="w-100 text-white" style="height: 56px;background-color: black;" @click="create">Create client</v-btn>
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
        firstName: '',
        lastName: '',
        address: '',
        email: '',
        phone: '',
        taxCode: '',
      }
    };
  },
  methods: {
    create() {
      axios.post('http://localhost:8080/client/create', this.userData)
        .then(response => {
          console.log('Registration successful!', response.data);
          this.$router.push('/authenticate/register');
        })
        .catch(error => {
          console.error('ERROR:', error);
        });
    },
  },
};
</script>
