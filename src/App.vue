<script setup lang="ts">
import LayoutNavbar from '@/components/Layout/Navbar.vue'
import LayoutFooter from '@/components/Layout/Footer/Index.vue'
</script>

<template>
  <LayoutNavbar />
  <router-view></router-view>
  <LayoutFooter />

</template>

