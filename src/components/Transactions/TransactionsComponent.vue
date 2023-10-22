<template>
    <v-card variant="flat">
        <v-card-title class="py-0">
            <div class="d-flex align-center">
                <p class="font-weight-bold">Transactions</p>
                <v-spacer></v-spacer>
                <v-btn variant="plain" size="small" class="text-subtitle-1">View all</v-btn>
            </div>
        </v-card-title>
        <v-card-text class="pa-0">
            <v-btn-toggle class="ml-2" density="compact" variant="plain">
                <v-btn variant="plain" size="small">All</v-btn>
                <v-btn variant="plain" size="small">Expenses</v-btn>
                <v-btn variant="plain" size="small">Income</v-btn>
            </v-btn-toggle>
            <v-list v-for="(transaction, index) in transactions" :key="index">
                <v-list-item>
                    <template #prepend>
                        <v-avatar :color="transaction.category.color">
                            <v-icon :icon="'mdi-' + transaction.category.icon"></v-icon>
                        </v-avatar>
                    </template>

                    <v-list-item-title>
                        {{ transaction.description }}
                    </v-list-item-title>
                    <v-list-item-subtitle>
                        {{ transaction.category.description }}
                    </v-list-item-subtitle>

                    <template #append>
                        <p v-if="transaction.type == 'expense'" class="font-weight-bold">-{{ transaction.currency +
                            transaction.amount }}</p>
                        <p v-else-if="transaction.type == 'income'" class="text-green font-weight-bold">+{{
                            transaction.currency + transaction.amount }}</p>
                    </template>
                </v-list-item>
            </v-list>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            transactions: [
                { type: "expense", description: "Central Burger", category: { description: "Cafe and Restaurant", icon: "hamburger", color: "#C3B6EE" }, amount: "189.36", currency: "$" },
                { type: "expense", description: "The Market", category: { description: "Groceries", icon: "store", color: "#BDDBF0" }, amount: "92.50", currency: "$" },
                { type: "income", description: "Quick Transfer", category: { description: "Maria Purple", icon: "swap-horizontal", color: "#F5C2AB" }, amount: "350", currency: "$" },
                { type: "expense", description: "The Market", category: { description: "Groceries", icon: "store", color: "#C3B6EE" }, amount: "36.20", currency: "$" },
                { type: "expense", description: "Central Burger", category: { description: "Cafe and Restaurant", icon: "hamburger", color: "#BDDBF0" }, amount: "189.36", currency: "$" },
            ]
        }
    }
}
</script>