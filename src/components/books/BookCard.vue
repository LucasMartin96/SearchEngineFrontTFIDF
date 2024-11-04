<script setup lang="ts">
import type { Document } from '@/types'
import GutenbergButton from '@/components/common/GutenbergButton.vue'

defineProps<{
  book: Document
}>()

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

const formatWordCount = (count: number) => {
  return new Intl.NumberFormat('en-US').format(count)
}
</script>

<template>
  <div 
    class="bg-theme-background-secondary p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
  >
    <h2 class="text-xl font-bold mb-4 font-heading break-words">
      {{ book.title }}
    </h2>
    
    <div class="space-y-2 text-theme-secondary font-body">
      <p class="flex items-center gap-2">
        <span>📝</span>
        {{ formatWordCount(book.wordCount) }} words
      </p>
      <p class="flex items-center gap-2">
        <span>📅</span>
        Added {{ formatDate(book.createdAt) }}
      </p>
    </div>

    <div class="mt-4 pt-4 border-t border-theme-background">
      <GutenbergButton :path="book.path" />
    </div>
  </div>
</template> 