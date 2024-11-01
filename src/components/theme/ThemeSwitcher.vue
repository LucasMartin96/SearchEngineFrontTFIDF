<script setup lang="ts">
import { useThemeStore, type ThemeType } from '../../stores/theme'

const themeStore = useThemeStore()

const toggleThemeMenu = () => {
  const menu = document.getElementById('theme-menu')
  menu?.classList.toggle('hidden')
}
</script>

<template>
  <div class="relative">
    <!-- Theme Button -->
    <button
      @click="toggleThemeMenu"
      class="fixed bottom-4 right-4 p-3 rounded-full shadow-lg bg-theme-secondary hover:bg-theme-accent transition-colors"
      aria-label="Change theme"
    >
      <span class="text-xl">{{ themeStore.themes[themeStore.currentTheme].icon }}</span>
    </button>

    <!-- Theme Menu -->
    <div
      id="theme-menu"
      class="hidden fixed bottom-16 right-4 bg-theme-background rounded-lg shadow-xl p-2 w-48 border border-theme-background-secondary"
    >
      <div class="space-y-2">
        <button
          v-for="(theme, key) in themeStore.themes"
          :key="key"
          @click="themeStore.setTheme(key as ThemeType)"
          class="w-full p-2 rounded-lg text-left hover:bg-theme-background-secondary transition-colors"
          :class="{ 'bg-theme-background-secondary': themeStore.currentTheme === key }"
        >
          <div class="flex items-center space-x-2">
            <span class="text-xl">{{ theme.icon }}</span>
            <div>
              <div class="font-medium text-theme-primary">{{ theme.name }}</div>
              <div class="text-sm opacity-75">{{ theme.description }}</div>
            </div>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>
