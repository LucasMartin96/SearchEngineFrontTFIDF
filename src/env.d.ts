/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_FRONTEND_REPO_URL: string
  readonly VITE_BACKEND_REPO_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
} 