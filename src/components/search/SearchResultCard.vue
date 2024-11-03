<script setup lang="ts">
import type { SearchResult } from '@/types'
import ScoreIndicator from './ScoreIndicator.vue'
import GutenbergButton from '@/components/common/GutenbergButton.vue'
import TermOccurrences from './TermOccurrences.vue'

defineProps<{
  result: SearchResult
}>()
</script>

<template>
  <div class="bg-theme-background-secondary p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
    <div class="flex justify-between items-start mb-4">
      <h2 class="text-xl font-bold font-heading">{{ result.title }}</h2>
      <ScoreIndicator :score="result.score" />
    </div>
    
    <TermOccurrences :terms="result.termOccurrences" />

    <div class="flex justify-end mt-4 pt-4 border-t border-theme-background">
      <GutenbergButton :path="result.path" />
    </div>
  </div>
</template> 