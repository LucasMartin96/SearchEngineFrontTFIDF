<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isMenuOpen = ref(false)
</script>

<template>
  <nav class="bg-theme-navbar text-theme-primary">
    <div class="container-custom">
      <div class="flex items-center justify-between h-16">
        <!-- Enhanced Logo/Brand -->
        <RouterLink to="/" class="group flex items-center gap-3">
          <div class="flex items-center bg-theme-background/10 px-4 py-2 rounded-sm border border-theme-accent/20">
            <span class="font-mono text-xl font-bold bg-gradient-to-r from-theme-secondary to-theme-accent bg-clip-text text-transparent">
              TF-IDF
            </span>
            <span class="text-theme-accent/50 mx-2">//</span>
            <span class="text-theme-secondary font-medium">
              Search
            </span>
          </div>
        </RouterLink>

        <!-- Rest of navbar remains the same -->
        <div class="hidden md:flex items-center space-x-4">
          <RouterLink 
            to="/" 
            class="hover:text-theme-accent transition-colors"
          >
            Home
          </RouterLink>
          <RouterLink 
            to="/search" 
            class="hover:text-theme-accent transition-colors"
          >
            Search
          </RouterLink>
          <RouterLink 
            to="/upload" 
            class="hover:text-theme-accent transition-colors"
          >
            Upload Book
          </RouterLink>
        </div>

        <!-- Mobile menu button -->
        <button 
          @click="isMenuOpen = !isMenuOpen"
          class="md:hidden"
        >
          <svg 
            class="w-6 h-6"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              v-if="!isMenuOpen"
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path 
              v-else
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile menu -->
      <div 
        v-show="isMenuOpen"
        class="md:hidden"
      >
        <div class="px-2 pt-2 pb-3 space-y-1">
          <RouterLink
            v-for="(link, index) in ['Home', 'Search', 'Upload Book']"
            :key="index"
            :to="link === 'Home' ? '/' : `/${link.toLowerCase().replace(' ', '')}`"
            class="block px-3 py-2 rounded-md hover:text-theme-accent transition-colors"
            @click="isMenuOpen = false"
          >
            {{ link }}
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>


