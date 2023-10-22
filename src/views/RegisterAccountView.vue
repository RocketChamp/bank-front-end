<template>
    <v-row class="h-100">
        <v-col class="left-side">

        </v-col>
        <v-col class="d-flex align-center justify-center">
            <Register />
        </v-col>
    </v-row>
</template>

<script setup>
import Register from '@/components/RegisterAccount.vue';
</script>

<style scoped>
.left-side {
    background-color: #576EEE;
}
</style>
