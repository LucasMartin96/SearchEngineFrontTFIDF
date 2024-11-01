<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="bg-theme-background-secondary py-20 overflow-hidden">
    <div class="container-custom relative">
      <!-- Decorative circles -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute -top-40 -right-40 w-80 h-80 bg-theme-accent opacity-5 rounded-full"></div>
        <div class="absolute -bottom-20 -left-20 w-60 h-60 bg-theme-secondary opacity-5 rounded-full"></div>
      </div>

      <div 
        class="text-center max-w-4xl mx-auto relative"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0 }"
        :delay="200"
      >
        <h1 class="text-5xl md:text-6xl font-bold mb-6 font-heading">
          Your Personal Speed-Reading Librarian 📚
        </h1>
        <p class="text-xl md:text-2xl text-theme-secondary mb-8 font-body">
          Search through classic books with the power of TF-IDF!
        </p>
        <div 
          class="flex justify-center gap-4"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0 }"
          :transition="{ duration: 400 }"
        >
          <RouterLink 
            to="/search" 
            class="btn btn-primary group"
          >
            Start Searching
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </RouterLink>
          <RouterLink 
            to="/upload" 
            class="btn btn-secondary group"
          >
            Add New Book
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:translate-y-[-2px] transition-transform" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
            </svg>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template> 