<template>
  <v-main>
    <NavigationDrawer :show="showNavigation" @change-drawer-state="toggleNavigation" />
    <v-row>
      <v-col class="pa-10">
        <HeaderComponent @burger-clicked="toggleNavigation" />
        <router-view />
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
import NavigationDrawer from '@/components/NavigationDrawer.vue';
import HeaderComponent from '@/components/Header.vue'

export default {
  components: {NavigationDrawer, HeaderComponent}, 
  data() {
    return {
      showNavigation: false
    }
  }, 
  methods: {
    toggleNavigation() {
      this.showNavigation = !this.showNavigation;
    }
  }
}
//
</script>
