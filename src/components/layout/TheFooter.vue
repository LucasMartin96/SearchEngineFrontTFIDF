<script setup lang="ts">
import { config } from '@/config'
import '@/assets/styles/footer.css'

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="mt-auto">
    <div class="relative h-[2px] w-full overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-theme-secondary via-theme-accent to-theme-secondary animate-slide"></div>
    </div>
    
    <div class="py-12 bg-[#111111] relative">
      <div class="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-[#3b82f620]"></div>
      <div class="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-[#3b82f620]"></div>
      
      <div class="container-custom relative">
        <div class="flex flex-col items-center justify-center gap-12">
          <div class="flex items-center gap-8">
            <a 
              v-for="repo in ['frontend', 'backend']"
              :key="repo"
              :href="config.repos[repo]"
              target="_blank"
              rel="noopener noreferrer"
              class="tech-link group"
            >
              <span class="tech-glow"></span>
              <svg class="h-5 w-5 text-theme-secondary group-hover:text-theme-accent transition-colors" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span class="text-theme-secondary group-hover:text-theme-accent transition-colors font-mono uppercase tracking-wider">{{ repo }}</span>
            </a>
          </div>

          <div class="relative">
            <div class="absolute inset-0 bg-theme-accent/5 skew-x-12 rounded"></div>
            <p class="relative flex items-center gap-3 text-theme-secondary px-8 py-3 font-mono">
              <span class="text-theme-accent/50">&lt;</span>
              <span>Crafted with</span>
              <span class="text-red-500 animate-pulse">❤️</span>
              <span>and endless</span>
              <span class="animate-bounce">🧉</span>
              <span class="text-theme-accent/50">/&gt;</span>
            </p>
          </div>

          <div class="text-theme-secondary/60 text-sm font-mono">
            <span class="text-theme-accent/50">&copy;</span> {{ currentYear }} Mate & Manuscripts
          </div>
        </div>
      </div>
    </div>
  </footer>
</template> 