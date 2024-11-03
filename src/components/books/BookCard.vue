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
    class="bg-theme-background-secondary p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow group flex flex-col h-[280px]"
  >

    <div class="flex-1 overflow-hidden">
      <h2 class="text-2xl font-bold mb-4 font-heading line-clamp-2">
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
    </div>
    

    <div class="mt-auto pt-4 border-t border-theme-background">
      <GutenbergButton :path="book.path" />
    </div>
  </div>
</template> 