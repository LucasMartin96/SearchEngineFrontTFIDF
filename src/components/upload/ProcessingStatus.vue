<script setup lang="ts">
defineProps<{
  documentId: string
  wordCount: number
}>()
</script>

<template>
  <div class="bg-theme-accent/10 p-6 rounded-lg border border-theme-accent">
    <h2 class="text-xl font-bold mb-4 flex items-center gap-2 font-heading">
      <span>✨</span> Book Indexed Successfully!
    </h2>
    <div class="space-y-2 font-body">
      <p>
        <span class="font-medium">Document ID:</span> 
        <span class="font-mono">{{ documentId }}</span>
      </p>
      <p>
        <span class="font-medium">Words Processed:</span> 
        {{ wordCount.toLocaleString() }}
      </p>
    </div>
  </div>
</template> 