<script setup lang="ts">
defineProps<{
  searchQuery: string
  isLoading: boolean
}>()

defineEmits<{
  (e: 'update:searchQuery', value: string): void
  (e: 'search'): void
}>()
</script>

<template>
  <div class="max-w-3xl mx-auto mb-12">
    <div class="bg-theme-background-secondary p-6 rounded-lg shadow-lg">
      <div class="flex flex-col sm:flex-row gap-4">
        <input
          :value="searchQuery"
          @input="e => $emit('update:searchQuery', (e.target as HTMLInputElement).value)"
          type="text"
          placeholder="Enter your search query..."
          class="flex-1 px-4 py-3 rounded-lg border border-theme-background-secondary focus:border-theme-secondary focus:ring-2 focus:ring-theme-secondary/20 bg-theme-background outline-none transition-all"
          @keyup.enter="$emit('search')"
        />
        <button
          @click="$emit('search')"
          class="btn btn-primary min-w-[120px] justify-center"
          :disabled="isLoading"
        >
          <template v-if="isLoading">
            <svg class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </template>
          <template v-else>Search</template>
        </button>
      </div>
    </div>
  </div>
</template> 