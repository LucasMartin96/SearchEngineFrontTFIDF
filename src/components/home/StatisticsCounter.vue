<script setup lang="ts">
import { ref, onMounted } from 'vue'
import VueCountUp from 'vue-countup-v3'
import axios from 'axios'
import { config } from '@/config'

interface Statistics {
  totalDocuments: number
  totalUniqueTerms: number
  totalTermOccurrences: number
  totalWordCount: number
  lastIndexedAt: string
}

const stats = ref<Statistics | null>(null)
const isLoading = ref(true)
const error = ref<string | null>(null)
const matesDrinked = ref(Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000) // Random 4-digit number

const fetchStats = async () => {
  try {
    const response = await axios.get(`${config.apiUrl}/statistics`)
    stats.value = response.data
  } catch (err) {
    error.value = 'Failed to load statistics'
  } finally {
    isLoading.value = false
  }
}

onMounted(() => fetchStats())
</script>

<template>
  <div 
    class="inline-block px-8 py-4 rounded-lg bg-theme-background shadow-lg relative overflow-hidden group"
    v-if="!error"
  >
    <div class="absolute -inset-1 bg-gradient-to-r from-theme-secondary to-theme-accent opacity-0 group-hover:opacity-10 rounded-lg transition-opacity"></div>

    <div class="flex flex-wrap justify-center items-center gap-6 text-lg md:text-xl font-body relative">
      <template v-if="isLoading">
        <div class="animate-pulse">Loading statistics...</div>
      </template>
      <template v-else-if="stats">
        <div class="flex items-center gap-2">
          <span class="font-bold text-theme-accent">
            <vue-count-up
              :endVal="stats.totalDocuments"
              :duration="2"
            />
          </span>
          <span class="text-theme-secondary">books</span>
          <span class="animate-bounce">📚</span>
        </div>

        <div class="h-6 w-px bg-theme-accent/20"></div>

        <div class="flex items-center gap-2">
          <span class="font-bold text-theme-accent">
            <vue-count-up
              :endVal="stats.totalWordCount"
              :duration="2.5"
              :options="{ separator: ',' }"
            />
          </span>
          <span class="text-theme-secondary">words</span>
          <span class="animate-bounce">📝</span>
        </div>

        <div class="h-6 w-px bg-theme-accent/20"></div>

        <div class="flex items-center gap-2">
          <span class="font-bold text-theme-accent">
            <vue-count-up
              :endVal="stats.totalUniqueTerms"
              :duration="2.2"
              :options="{ separator: ',' }"
            />
          </span>
          <span class="text-theme-secondary">unique terms</span>
          <span class="animate-bounce">🔤</span>
        </div>

        <div class="h-6 w-px bg-theme-accent/20"></div>

        <div class="flex items-center gap-2">
          <span class="font-bold text-theme-accent">
            <vue-count-up
              :endVal="matesDrinked"
              :duration="2.8"
            />
          </span>
          <span class="text-theme-secondary">mates drinked</span>
          <span class="animate-bounce">🧉</span>
        </div>
      </template>
    </div>
  </div>
</template> 