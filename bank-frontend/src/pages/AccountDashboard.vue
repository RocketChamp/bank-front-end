<template>
  <div>
    <LeftBar @logout="handleLogout" /> <!-- Include the LeftBar component -->
    <!-- Rest of your Dashboard content goes here -->
  </div>
</template>

<script>
import LeftBar from '@/components/LeftBar.vue' // Import the LeftBar component

export default {
  components: {
    LeftBar // Register the LeftBar component
  },
  methods: {
    handleLogout () {
      // Handle the logout logic if needed
    }
  }
}
</script>
