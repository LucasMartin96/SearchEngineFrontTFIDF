<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{
  bookId: string
  isProcessing: boolean
}>()

const emit = defineEmits<{
  (e: 'update:bookId', value: string): void
  (e: 'submit'): void
}>()

const error = ref('')

const isValid = computed(() => {
  if (!props.bookId) {
    error.value = ''
    return false
  }
  
  // Check if it's a positive integer
  const numberValue = parseInt(props.bookId)
  if (isNaN(numberValue) || numberValue.toString() !== props.bookId || numberValue <= 0) {
    error.value = 'Please enter a valid positive book ID number'
    return false
  }

  error.value = ''
  return true
})

const handleInput = (e: Event) => {
  const value = (e.target as HTMLInputElement).value
  // Only allow digits
  const sanitizedValue = value.replace(/[^0-9]/g, '')
  emit('update:bookId', sanitizedValue)
}

const handleSubmit = () => {
  if (isValid.value) {
    emit('submit')
  }
}
</script>

<template>
  <div class="bg-theme-background-secondary p-6 rounded-lg shadow-lg mb-8">
    <div class="space-y-4">
      <div>
        <label for="bookId" class="block text-sm font-medium mb-2 text-theme-primary">
          Project Gutenberg Book ID
        </label>
        <input
          id="bookId"
          type="text"
          inputmode="numeric"
          pattern="[0-9]*"
          :value="bookId"
          @input="handleInput"
          placeholder="Enter book ID (e.g., 1342 for Pride and Prejudice)"
          class="w-full px-4 py-3 rounded-lg 
            border border-theme-background-secondary 
            focus:border-theme-secondary focus:ring-2 focus:ring-theme-secondary/20 
            bg-theme-background 
            outline-none transition-all"
          :class="[
            error 
              ? 'border-red-500 focus:border-red-500' 
              : ''
          ]"
          :disabled="isProcessing"
        />
        
        <p 
          v-if="error" 
          class="mt-2 text-sm text-red-500 flex items-center gap-1"
        >
          <span>⚠️</span>
          {{ error }}
        </p>
        
        <p 
          v-else 
          class="mt-2 text-sm text-theme-secondary"
        >
          You can find the book ID in the Project Gutenberg URL
        </p>
      </div>

      <button
        @click="handleSubmit"
        class="btn btn-primary w-full justify-center"
        :disabled="isProcessing || !isValid"
      >
        <span v-if="isProcessing" class="flex items-center">
          <svg class="animate-spin h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Processing...
        </span>
        <span v-else>Index Book</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
input {
  caret-color: var(--color-accent);
}

input::selection {
  background: var(--color-accent);
  color: var(--color-background);
}
</style> 