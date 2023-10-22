<template>
    <v-navigation-drawer border="none" color="#F8F9FA" width="300" clipped fixed app v-model="internalShow">
        <v-list>
            <v-list-item :ripple="false">
                <div class="text-h5 py-12 px-6">Plutus</div>
            </v-list-item>
            <v-list-item :ripple="false" link prepend-icon="mdi-home" title="Dashboard" to="/dashboard"></v-list-item>
            <v-list-item :ripple="false" link prepend-icon="mdi-bank-transfer-out" title="Transfer"
                to="/transfer"></v-list-item>
            <v-list-item :ripple="false" link prepend-icon="mdi-swap-horizontal" title="Transactions"
                to="/transactions"></v-list-item>
            <v-list-item :ripple="false" link prepend-icon="mdi-credit-card-multiple" title="Accounts and Cards"
                to="/accounts"></v-list-item>
        </v-list>
        <template #append>
            <v-list>
                <v-list-item :ripple="false" link prepend-icon="mdi-cog" title="Settings" to="/settings"></v-list-item>
                <v-list-item class="mb-12" :ripple="false" link prepend-icon="mdi-logout" title="Log out"
                    to="/authenticate/login"></v-list-item>
            </v-list>
        </template>
    </v-navigation-drawer>
</template>

<script>
export default {
    props: {
        show: Boolean
    },
    data() {
        return {
            internalShow: this.show,
        };
    },
    watch: {
        show(val) {
            this.internalShow = val;
        },
        internalShow(val) {
            if (val !== this.show) {
                this.$emit("change-drawer-state");
            }
        },
    },
}

</script>

<style scoped>
.v-list-item--active .v-list-item-title {
    font-weight: bold !important;
}

.v-list-item--variant-text .v-list-item__overlay {
    background-color: transparent !important;
}

.v-list-item--active::before {
    content: "";
    position: absolute;
    height: calc(100% - 16px);
    width: 3px;
    left: 0;
    top: 8px;
    background-color: black;
}

.v-list-item__prepend {
    margin-left: 30px !important;
}</style>