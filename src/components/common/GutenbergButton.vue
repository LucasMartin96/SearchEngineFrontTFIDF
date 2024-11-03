<script setup lang="ts">
defineProps<{
  path: string
}>()
</script>

<template>
  <a 
    :href="path"
    target="_blank"
    rel="noopener noreferrer"
    class="btn btn-secondary group flex items-center justify-center w-full text-sm relative"
    title="Open book in Project Gutenberg (new tab)"
  >
    <span class="flex items-center gap-2">
      📚 Read on Project Gutenberg
    </span>
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      class="h-4 w-4 group-hover:translate-x-1 transition-transform absolute right-4" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
    >
      <path 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        stroke-width="2" 
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
      />
    </svg>
  </a>
</template> 