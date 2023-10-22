<template>
    <v-toolbar color="transparent" height="100">
        <v-toolbar-title class="font-weight-bold text-h5">{{ routeName }}</v-toolbar-title>
        <div class="d-flex align-center">
            <v-menu>
                <template #activator="{ props }">
                    <v-btn icon="mdi-bell" v-bind="props" />

                </template>
                <v-list>
                    <v-list-item v-for="(item, index) in [1, 2, 3, 4]" :key="index" :value="index">
                        <v-list-item-title> Notification {{ index }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
            <v-avatar color="surface-variant" class="border border-black">
                <v-img src="/sebi.png"></v-img>
            </v-avatar>
            <v-menu>
                <template #activator="{ props }">
                    <v-btn append-icon="mdi-chevron-down" v-bind="props">
                        <p>Eusebiu Jacot</p>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item v-for="(item, index) in [1, 2, 3, 4]" :key="index" :value="index">
                        <v-list-item-title> Menu item {{ index }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </div>
    </v-toolbar>
</template>

<script>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

export default {
    setup() {
        const route = useRoute();
        const routeName = computed(() => route.name)
        return { routeName }
    }
}
</script>