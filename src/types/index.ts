export interface TermOccurrence {
  termId: string
  value: string
  frequency: number
}

export interface SearchResult {
  documentId: string
  title: string
  path: string
  score: number
  termOccurrences: TermOccurrence[]
}

export interface SearchResponse {
  items: SearchResult[]
  totalCount: number
  pageNumber: number
  pageSize: number
  totalPages: number
}

export interface Document {
  id: string
  title: string
  path: string          // Gutenberg URL
  wordCount: number
  createdAt: string
}

export interface DocumentsResponse {
  items: Document[]
  pageNumber: number
  pageSize: number
  totalPages: number
  totalCount: number
  hasPreviousPage: boolean
  hasNextPage: boolean
}
