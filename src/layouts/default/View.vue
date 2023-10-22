<template>
  <v-main>
    <NavigationDrawer />
      <v-row>
        <v-col>
          <Header />
          <router-view />
        </v-col>
      </v-row>
  </v-main>
</template>

<script setup>
import NavigationDrawer from '@/components/NavigationDrawer.vue';
import Header from '@/components/Header.vue'
//
</script>
