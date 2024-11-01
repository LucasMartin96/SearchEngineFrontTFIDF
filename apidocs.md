# Search Engine API Documentation

**Base URL:** `http://localhost:5009/api`

---

## 1. Index Gutenberg Book

**Endpoint:** `POST /index/gutenberg/{bookId}`

**Description:**  
Indexes a book from Project Gutenberg by its ID.

### Request Parameters:
- **Path Parameter:**  
  - `bookId` *(integer)* — The Project Gutenberg book ID to index.

### Success Response:
- **Status:** `200 OK`
- **Body:**
  ```json
  {
    "documentId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "wordCount": 50000
  }
  ```

### Error Responses:
- **Status:** `404 Not Found`  
  When book is not found in Project Gutenberg.
  - **Body:**
    ```json
    {
      "message": "Book with ID {bookId} not found",
      "traceId": "00-1234567890abcdef-1234567890abcdef-00"
    }
    ```

- **Status:** `500 Internal Server Error`  
  When the server encounters a processing error.
  - **Body:**
    ```json
    {
      "message": "An unexpected error occurred.",
      "traceId": "00-1234567890abcdef-1234567890abcdef-00"
    }
    ```

---

## 2. Search Documents

**Endpoint:** `GET /search`

**Description:**  
Searches through indexed documents with pagination support.

### Request Parameters:
- **Query Parameters:**
  - `query` *(string, required)* — Search terms.
  - `pageNumber` *(integer, optional, default: 1)* — Page number.
  - `pageSize` *(integer, optional, default: 10, max: 50)* — Results per page.

### Success Response:
- **Status:** `200 OK`
- **Body:**
  ```json
  {
    "items": [
      {
        "documentId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "title": "Pride and Prejudice",
        "path": "https://www.gutenberg.org/cache/epub/1342/pg1342.txt",
        "score": 0.75,
        "termOccurrences": [
          {
            "termId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "value": "pride",
            "frequency": 10
          }
        ]
      }
    ],
    "totalCount": 100,
    "pageNumber": 1,
    "pageSize": 10,
    "totalPages": 10
  }
  ```

### Error Responses:
- **Status:** `400 Bad Request`  
  When query parameters are invalid.
  - **Body:**
    ```json
    {
      "message": "Invalid search parameters",
      "traceId": "00-1234567890abcdef-1234567890abcdef-00"
    }
    ```

- **Status:** `500 Internal Server Error`  
  When the server encounters a processing error.
  - **Body:**
    ```json
    {
      "message": "An unexpected error occurred.",
      "traceId": "00-1234567890abcdef-1234567890abcdef-00"
    }
    ```
