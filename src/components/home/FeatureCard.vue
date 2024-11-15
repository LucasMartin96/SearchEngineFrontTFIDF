<script setup lang="ts">
import { Feature } from "@types/feature"

defineProps<Feature>();

</script>

<template>
  <section 
    class="bg-theme-background-secondary p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow group relative"
    v-motion
    :initial="{ opacity: 0, y: 20 }"
    :enter="{ opacity: 1, y: 0 }"
    :delay="delay"
    :transition="{ duration: 300 }"
  >
    <div class="absolute -inset-1 bg-gradient-to-r from-theme-secondary to-theme-accent opacity-0 group-hover:opacity-10 rounded-lg transition-opacity"></div>
    <h2 class="text-2xl font-bold mb-4 font-heading flex items-center gap-2">
      <span class="group-hover:scale-125 transition-transform inline-block">{{ emoji }}</span> 
      {{ title }}
    </h2>
    <p class="text-lg font-body leading-relaxed">
      {{ content }}
    </p>
  </section>
</template> 