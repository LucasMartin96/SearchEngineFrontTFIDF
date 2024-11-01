<script setup lang="ts">
import type { SearchResult } from '@/types'
import ScoreIndicator from './ScoreIndicator.vue'

defineProps<{
  result: SearchResult
}>()
</script>

<template>
  <div class="bg-theme-background-secondary p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
    <!-- Header -->
    <div class="flex justify-between items-start mb-4">
      <h2 class="text-xl font-bold font-heading">{{ result.title }}</h2>
      <ScoreIndicator :score="result.score" />
    </div>
    
    <!-- Term Occurrences -->
    <div class="space-y-2 mb-4">
      <div v-for="term in result.termOccurrences" :key="term.termId" class="text-sm">
        <span class="font-medium">{{ term.value }}:</span> 
        appears {{ term.frequency }} times
      </div>
    </div>

    <!-- Action Buttons -->
    <div class="flex justify-end mt-4 pt-4 border-t border-theme-background">
      <a 
        :href="result.path"
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-secondary group flex items-center gap-2 text-sm"
        title="Open book in Project Gutenberg (new tab)"
      >
        <span class="flex items-center gap-2">
          📚 Read on Project Gutenberg
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            class="h-4 w-4 group-hover:translate-x-1 transition-transform" 
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
        </span>
      </a>
    </div>
  </div>
</template> 