export const config = {
  apiUrl: import.meta.env.VITE_API_URL,
  repos: {
    frontend: import.meta.env.VITE_FRONTEND_REPO_URL,
    backend: import.meta.env.VITE_BACKEND_REPO_URL
  }
}

// Validate required environment variables
const requiredEnvVars = [
  'VITE_API_URL',
  'VITE_FRONTEND_REPO_URL',
  'VITE_BACKEND_REPO_URL'
]

requiredEnvVars.forEach(envVar => {
  if (!import.meta.env[envVar]) {
    throw new Error(`Missing required environment variable: ${envVar}`)
  }
}) 