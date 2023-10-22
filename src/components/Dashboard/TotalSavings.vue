<template>
    <Card>
        <v-card-title>
            <v-row class="d-flex">
                <v-col>Total Savings</v-col>
                <v-spacer></v-spacer>
                <v-col class="d-flex justify-end align-center">
                    <v-icon icon="mdi-arrow-up-bold-circle" color="#55AFA9"></v-icon>
                    <p style="color: #55AFA9">2.36%</p>
                </v-col>
            </v-row>
        </v-card-title>
        <v-card-title>
            <p class="text-h4 font-weight-bold">
                USD 5,000.00
            </p>
        </v-card-title>
    </Card>
</template>

<script setup>
import Card from '@/components/common/Card.vue'
</script>