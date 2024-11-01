<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  score: number
}>()

const scoreEmoji = computed(() => {
  // Fun emojis for top 10 results
  const topEmojis = ['🏆', '⭐', '✨', '💫', '🌟', '⚡', '🎯', '💎', '🔥', '✅']
  
  // If it's in top 10, return fun emoji, otherwise just a basic one
  return props.score > 0.5 ? topEmojis[Math.floor(Math.random() * topEmojis.length)] : '📚'
})
</script>

<template>
  <div class="score-indicator">
    <div class="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium">
      <span class="score-emoji">{{ scoreEmoji }}</span>
      <span class="score-value font-bold">Score: {{ score.toFixed(2) }}</span>
    </div>
  </div>
</template>

<style scoped>
.score-indicator {
  @apply transition-all duration-200 border rounded-full;
}

/* Using theme colors for different scores */
.score-indicator {
  background: rgba(var(--color-secondary-rgb), 0.15);
  @apply text-theme-secondary border-theme-secondary;
}

.score-indicator .score-emoji {
  @apply animate-pulse;
}

/* Hover effect */
.score-indicator:hover {
  @apply transform scale-105;
  background: rgba(var(--color-secondary-rgb), 0.25);
}

/* Make text bolder for better visibility */
.score-value {
  @apply font-bold;
}
</style> 