<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheNavbar from './components/layout/Navbar.vue'
import TheFooter from './components/layout/TheFooter.vue'
import { useThemeStore } from './stores/theme'

const themeStore = useThemeStore()
</script>

<template>
  <div 
    class="min-h-screen flex flex-col bg-theme-background text-theme-primary"
    :class="themeStore.currentTheme"
  >
    <TheNavbar />
    <RouterView />
    <TheFooter />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
