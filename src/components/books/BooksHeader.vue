<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div 
    class="text-center mb-12"
    v-motion
    :initial="{ opacity: 0, y: 20 }"
    :enter="{ opacity: 1, y: 0 }"
  >
    <h1 class="text-4xl font-bold mb-4 font-heading">
      Available Books 📚
    </h1>
    <p class="text-xl text-theme-secondary font-body mb-6">
      Here's our humble collection of indexed books!
      <span class="block mt-2">
        🐌✨ We're keeping it small and cozy due to free-tier limitations.
      </span>
    </p>
    <RouterLink 
      to="/upload" 
      class="btn btn-primary inline-flex items-center gap-2"
    >
      Add New Book
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
      </svg>
    </RouterLink>
  </div>
</template> 