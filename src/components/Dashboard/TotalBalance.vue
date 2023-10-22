<template>
    <Card>
        <v-card-title>
            <v-row class="d-flex">
                <v-col>Total Balance</v-col>
                <v-spacer></v-spacer>
                <v-col class="d-flex justify-end align-center">
                    <v-icon icon="mdi-arrow-up-bold-circle" color="#55AFA9"></v-icon>
                    <p style="color: #55AFA9">2.36%</p>
                </v-col>
            </v-row>
        </v-card-title>
        <v-card-text>
            <v-row>
                <v-col>
                    <p class="text-h4 font-weight-bold">
                        USD 10,000.00
                    </p>
                </v-col>
            </v-row>
            <v-row>
                <v-col class="d-flex flex-column align-center">

                    <div class="d-flex">
                        <v-icon color="#55AFA9" icon="mdi-menu-up" />
                        <div class="ml-1 ">Income</div>
                    </div>

                    <div class="font-weight-bold">USD 30,000.00</div>

                </v-col>
                <v-divider vertical></v-divider>
                <v-col class="d-flex flex-column align-center">
                    <div class="d-flex">
                        <v-icon color="#C53856" icon="mdi-menu-down" />
                        <div class="ml-1 ">Expenses</div>
                    </div>
                    <div class="font-weight-bold">USD 20,000.00</div>
                </v-col>
            </v-row>
        </v-card-text>
    </Card>
</template>

<script setup>
import Card from '@/components/common/Card.vue';
</script>