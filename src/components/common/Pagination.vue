<script setup lang="ts">
defineProps<{
  currentPage: number
  totalPages: number
}>()

const emit = defineEmits<{
  (e: 'change', page: number): void
}>()
</script>

<template>
  <div class="flex justify-center gap-2">

    <button
      class="btn btn-secondary"
      :disabled="currentPage === 1"
      @click="emit('change', currentPage - 1)"
    >
      Previous
    </button>

    <div class="flex gap-2">
      <button
        v-for="page in totalPages"
        :key="page"
        class="btn"
        :class="page === currentPage ? 'btn-primary' : 'btn-secondary'"
        @click="emit('change', page)"
      >
        {{ page }}
      </button>
    </div>

    <button
      class="btn btn-secondary"
      :disabled="currentPage === totalPages"
      @click="emit('change', currentPage + 1)"
    >
      Next
    </button>
  </div>
</template> 