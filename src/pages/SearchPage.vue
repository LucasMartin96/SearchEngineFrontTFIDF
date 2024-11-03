<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import { useToast } from 'vue-toastification'
import type { SearchResponse } from '@/types'
import SearchHeader from '@/components/search/SearchHeader.vue'
import SearchForm from '@/components/search/SearchForm.vue'
import SearchResults from '@/components/search/SearchResults.vue'
import { config } from '@/config'

const toast = useToast()
const searchQuery = ref('')
const isLoading = ref(false)
const currentPage = ref(1)
const pageSize = ref(10)
const results = ref<SearchResponse | null>(null)
const error = ref<string | null>(null)

const handleSearch = async (page = 1) => {
  if (!searchQuery.value.trim()) return
  
  isLoading.value = true
  currentPage.value = page
  error.value = null
  
  try {
    const response = await axios.get<SearchResponse>(`${config.apiUrl}/search`, {
      params: {
        query: searchQuery.value,
        pageNumber: page,
        pageSize: pageSize.value
      }
    })
    results.value = response.data
  } catch (err) {
    let message = 'An error occurred while searching'
    
    if (axios.isAxiosError(err)) {
      if (err.code === 'ERR_NETWORK') {
        message = 'Unable to connect to the search service. Please make sure the API is running.'
      } else if (err.response?.status === 403 || err.response?.status === 401) {
        message = 'Authentication error. Please try again.'
      } else if (err.response?.status === 404) {
        message = 'Search service not found.'
      }
    }
    
    error.value = message
    toast.error(message)
    console.error('Search failed:', err)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="container-custom py-8">
    <SearchHeader />
    <SearchForm
      v-model:searchQuery="searchQuery"
      :is-loading="isLoading"
      @search="handleSearch(1)"
    />
    
    <div 
      v-if="error" 
      class="max-w-3xl mx-auto mb-8 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700"
    >
      <p class="flex items-center gap-2">
        <span>⚠️</span>
        {{ error }}
      </p>
      <p class="text-sm mt-2">
        Tips:
        <ul class="list-disc list-inside ml-4">
          <li>Make sure the API is running at https://localhost:44316</li>
          <li>Check if CORS is enabled on the API</li>
        </ul>
      </p>
    </div>
    
    <SearchResults
      :results="results"
      :is-loading="isLoading"
      @page-change="handleSearch"
    />
  </div>
</template>
