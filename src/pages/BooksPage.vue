<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { config } from '@/config'
import BooksHeader from '@/components/books/BooksHeader.vue'
import BooksList from '@/components/books/BooksList.vue'
import Pagination from '@/components/common/Pagination.vue'
import type { DocumentsResponse } from '@/types'

const books = ref<DocumentsResponse | null>(null)
const isLoading = ref(true)
const error = ref<string | null>(null)
const currentPage = ref(1)
const pageSize = 10 // or whatever default you want

const fetchBooks = async (page: number = 1) => {
  try {
    isLoading.value = true
    const response = await axios.get(`${config.apiUrl}/document`, {
      params: {
        page,
        pageSize
      }
    })
    books.value = response.data
    currentPage.value = page
  } catch (err) {
    error.value = 'Failed to load books'
  } finally {
    isLoading.value = false
  }
}

const handlePageChange = (page: number) => {
  fetchBooks(page)
}

onMounted(() => fetchBooks(1))
</script>

<template>
  <div class="container-custom py-16">
    <BooksHeader />
    
    <BooksList
      :books="books?.items"
      :is-loading="isLoading"
      :error="error"
    />

    <div v-if="books && books.totalPages > 1" class="mt-8">
      <Pagination
        :current-page="currentPage"
        :total-pages="books.totalPages"
        @change="handlePageChange"
      />
    </div>
  </div>
</template> 