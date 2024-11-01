<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import { useToast } from 'vue-toastification'
import UploadForm from '@/components/upload/UploadForm.vue'
import ProcessingStatus from '@/components/upload/ProcessingStatus.vue'
import { config } from '@/config'

const toast = useToast()
const isProcessing = ref(false)
const bookId = ref('')
const result = ref(null)

const handleUpload = async () => {
  if (!bookId.value) {
    toast.error('Please enter a book ID')
    return
  }

  isProcessing.value = true
  try {
    const response = await axios.post(
      `${config.apiUrl}/index/gutenberg/${bookId.value}`
    )
    result.value = response.data
    toast.success('Book indexed successfully!')
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message = error.response?.data?.message || 'Failed to index book'
      toast.error(message)
    }
  } finally {
    isProcessing.value = false
  }
}
</script>

<template>
  <div class="container-custom py-8">
    <div class="max-w-2xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold mb-4 font-heading">Upload New Book</h1>
        <p class="text-xl text-theme-secondary font-body">
          Add a new book from Project Gutenberg to the search index
        </p>
      </div>

      <!-- Upload Form -->
      <UploadForm
        v-model:bookId="bookId"
        :is-processing="isProcessing"
        @submit="handleUpload"
      />

      <!-- Processing Status -->
      <ProcessingStatus
        v-if="result"
        :document-id="result.documentId"
        :word-count="result.wordCount"
      />
    </div>
  </div>
</template>
