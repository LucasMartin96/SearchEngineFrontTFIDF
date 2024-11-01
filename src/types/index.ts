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
