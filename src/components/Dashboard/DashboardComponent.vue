<template>
    <v-row>
        <v-col cols="7">
            <v-row>
                <v-col cols="7">
                    <TotalBalance />
                </v-col>
                <v-col cols="5">
                    <TotalSavings />
                </v-col>
            </v-row>
        </v-col>
        <v-col cols="5">
            <TransactionsComponent />
        </v-col>
    </v-row>
</template>

<script setup>
import TotalBalance from "@/components/Dashboard/TotalBalance.vue";
import TotalSavings from "@/components/Dashboard/TotalSavings.vue";
import TransactionsComponent from "@/components/Transactions/TransactionsComponent.vue";
// import Row from "@/components/common/Template.vue"
</script>