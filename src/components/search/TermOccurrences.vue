<script setup lang="ts">
interface TermOccurrence {
  termId: string
  value: string
  frequency: number
}

defineProps<{
  terms: TermOccurrence[]
}>()
</script>

<template>
  <div class="space-y-2">
    <div 
      v-for="term in terms" 
      :key="term.termId"
      class="bg-theme-background p-3 rounded-lg flex items-center justify-between group hover:bg-theme-accent/10 transition-colors"
    >
      <div class="flex items-center gap-2">
        <span class="text-theme-accent">🔍</span>
        <span class="font-medium">{{ term.value }}</span>
      </div>
      <div class="text-sm text-theme-secondary">
        <span class="bg-theme-accent/20 px-2 py-1 rounded-full">
          {{ term.frequency }} occurrences
        </span>
      </div>
    </div>
  </div>
</template> 