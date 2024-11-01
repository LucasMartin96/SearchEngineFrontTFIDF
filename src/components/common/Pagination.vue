<script setup lang="ts">
defineProps<{
  currentPage: number
  totalPages: number
}>()

defineEmits<{
  (e: 'change', page: number): void
}>()
</script>

<template>
  <div v-if="totalPages > 1" class="flex justify-center gap-2 mt-8">
    <button
      v-for="page in totalPages"
      :key="page"
      @click="$emit('change', page)"
      class="px-4 py-2 rounded-lg"
      :class="page === currentPage 
        ? 'bg-theme-secondary text-white' 
        : 'bg-theme-background-secondary hover:bg-theme-secondary/10'"
    >
      {{ page }}
    </button>
  </div>
</template> 