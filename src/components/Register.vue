<template>
    <v-card class="w-100" elevation="0">
        <v-card-title>Register</v-card-title>
        <v-card-text class="mt-5">
            <v-text-field variant="outlined" label="Account number" placeholder="1111 0000 1111 0000"></v-text-field>
            <v-text-field variant="outlined" label="Password" type="password" placeholder="············"></v-text-field>
            <v-btn class="w-100 text-white" style="height: 56px;background-color: black;" to="/dashboard">Register</v-btn>
            <div class="mt-5">
                <router-link to="/authenticate/login">Already have an account?</router-link>
            </div>
        </v-card-text>
    </v-card>
</template>
<script>
import { RouterLink } from 'vue-router'

export default {
    components: { RouterLink }
}
</script>