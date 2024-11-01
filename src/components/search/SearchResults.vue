<script setup lang="ts">
import type { SearchResponse } from '@/types'
import SearchResultCard from './SearchResultCard.vue'
import Pagination from '../common/Pagination.vue'
import NoResults from './NoResults.vue'

defineProps<{
  results: SearchResponse | null
  isLoading: boolean
}>()

defineEmits<{
  (e: 'pageChange', page: number): void
}>()
</script>

<template>
  <div v-if="results?.items.length" class="max-w-4xl mx-auto space-y-6">
    <!-- Results List -->
    <SearchResultCard
      v-for="result in results.items" 
      :key="result.documentId"
      :result="result"
    />

    <!-- Pagination -->
    <Pagination
      :current-page="results.pageNumber"
      :total-pages="results.totalPages"
      @change="$emit('pageChange', $event)"
    />
  </div>

  <!-- No Results State -->
  <NoResults v-else-if="!isLoading && results" />
</template> 