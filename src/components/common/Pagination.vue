<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  currentPage: number
  totalPages: number
}>()

const emit = defineEmits<{
  (e: 'change', page: number): void
}>()

const handlePageChange = (page: number) => {
  if (page < 1 || page > props.totalPages || page === props.currentPage) return
  emit('change', page)
}

const displayedPages = computed(() => {
  const pages = []
  const maxDisplayed = 5
  const halfDisplay = Math.floor(maxDisplayed / 2)
  
  let start = Math.max(1, props.currentPage - halfDisplay)
  let end = Math.min(props.totalPages, start + maxDisplayed - 1)
  
  if (end === props.totalPages) {
    start = Math.max(1, end - maxDisplayed + 1)
  }
  
  for (let i = start; i <= end; i++) {
    pages.push(i)
  }
  
  return pages
})
</script>

<template>
  <div class="flex flex-wrap justify-center gap-2 px-4">

    <button
      @click="handlePageChange(currentPage - 1)"
      :disabled="currentPage === 1"
      class="px-3 py-1 text-sm rounded-md border border-theme-accent/20 bg-theme-accent/10 hover:bg-theme-accent/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
    >
      Previous
    </button>

    <div class="hidden md:flex gap-2">
      <button
        v-for="page in displayedPages"
        :key="page"
        @click="handlePageChange(page)"
        :class="[
          'px-3 py-1 text-sm rounded-md border transition-colors',
          currentPage === page 
            ? 'bg-theme-accent text-white border-theme-accent' 
            : 'border-theme-accent/20 bg-theme-accent/10 hover:bg-theme-accent/20'
        ]"
      >
        {{ page }}
      </button>
    </div>

    <span class="md:hidden px-3 py-1 text-sm rounded-md border border-theme-accent/20 bg-theme-accent/10">
      Page {{ currentPage }} of {{ totalPages }}
    </span>

    <button
      @click="handlePageChange(currentPage + 1)"
      :disabled="currentPage === totalPages"
      class="px-3 py-1 text-sm rounded-md border border-theme-accent/20 bg-theme-accent/10 hover:bg-theme-accent/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
    >
      Next
    </button>
  </div>
</template> 