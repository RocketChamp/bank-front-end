<template>
  <div class="card">
    <h2>Account Info:</h2>
    <p><strong>Balance account:</strong> {{ balance }}</p>
    <p><strong>Currency Code:</strong> {{ currencyCode }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      balance: Number,
      currencyCode: String
    }
  },
  methods: {
    getUserData() {
      const username = localStorage.getItem('username'); // Obțineți username din localStorage
      axios.get(`http://localhost:8080/account/foundByUsername/${username}`)
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error('ERROR:', error);
        });
    }
  },
  mounted() {
    this.getUserData()
  }
};
</script>

<style scoped>
.card {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 16px;
  max-width: 300px;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 16px;
}

strong {
  font-weight: bold;
}
</style>
