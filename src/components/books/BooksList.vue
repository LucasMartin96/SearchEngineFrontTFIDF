<script setup lang="ts">
import type { Document } from '@/types'
import BookCard from './BookCard.vue'

defineProps<{
  books?: Document[]
  isLoading: boolean
  error: string | null
}>()
</script>

<template>
  <div v-if="isLoading" class="max-w-3xl mx-auto space-y-6">
    <div 
      v-for="i in 4" 
      :key="i"
      class="bg-theme-background-secondary animate-pulse h-48 rounded-lg"
    />
  </div>

  <div 
    v-else-if="error"
    class="max-w-3xl mx-auto text-center py-12 text-theme-secondary"
  >
    <p class="text-xl font-body">
      😅 Oops! {{ error }}
    </p>
  </div>

  <div 
    v-else-if="!books?.length"
    class="max-w-3xl mx-auto text-center py-12 text-theme-secondary"
  >
    <p class="text-xl font-body">
      📚 No books indexed yet! Try adding some books.
    </p>
  </div>

  <div 
    v-else 
    class="max-w-3xl mx-auto space-y-6"
  >
    <div 
      v-for="book in books"
      :key="book.id"
    >
      <BookCard :book="book" />
    </div>
  </div>
</template> 