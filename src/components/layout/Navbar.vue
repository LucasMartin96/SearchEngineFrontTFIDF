<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isMenuOpen = ref(false)

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Search', path: '/search' },
  { name: 'Books', path: '/books' },
  { name: 'Upload', path: '/upload' }
]

const isActive = (path: string) => route.path === path
</script>

<template>
  <nav class="bg-[#1a1a1a] sticky top-0 z-50 shadow-md">
    <div class="container-custom">
      <div class="flex items-center justify-between h-16">
        <RouterLink 
          to="/" 
          class="font-heading flex items-center gap-2"
        >
          <span class="text-2xl">🧉</span>
          <span class="text-lg font-semibold text-white">Mate & Manuscripts</span>
        </RouterLink>

        <div class="hidden md:flex items-center space-x-8">
          <RouterLink
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="font-medium text-gray-300 hover:text-theme-accent transition-all relative py-1"
            :class="{ '!text-theme-accent': isActive(item.path) }"
          >
            {{ item.name }}
          </RouterLink>
        </div>
        <button 
          class="md:hidden text-gray-300"
          @click="isMenuOpen = !isMenuOpen"
        >
          <svg 
            class="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <div 
        v-show="isMenuOpen"
        class="md:hidden pb-4"
      >
        <RouterLink
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="block py-2 text-gray-300 hover:text-theme-accent transition-colors"
          :class="{ 'text-theme-accent': isActive(item.path) }"
          @click="isMenuOpen = false"
        >
          {{ item.name }}
        </RouterLink>
      </div>
    </div>
  </nav>
</template>