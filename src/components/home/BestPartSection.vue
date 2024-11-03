<template>
  <section 
    class="max-w-4xl mx-auto mt-16 text-center bg-theme-background-secondary p-8 rounded-lg shadow-lg relative overflow-hidden"
    v-motion
    :initial="{ opacity: 0, y: 20 }"
    :enter="{ opacity: 1, y: 0 }"
    :delay="400"
    :transition="{ duration: 300 }"
  >
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-theme-secondary to-theme-accent opacity-50"></div>
    </div>

    <h2 class="text-3xl font-bold mb-6 font-heading flex items-center justify-center gap-2">
      <span class="animate-pulse">🚀</span> The Best Part
    </h2>
    <p class="text-xl font-body leading-relaxed mb-8">
      You can just throw a book ID at it from Project Gutenberg, and it downloads and processes everything automatically. 
      No more copy-pasting stuff! And when you search, it gives you results ordered by how relevant they actually are, not just random matches.
    </p>

    <div 
      class="mb-8 p-4 bg-theme-accent/10 rounded-lg border border-theme-accent/20"
      v-motion
      :initial="{ opacity: 0, scale: 0.95 }"
      :enter="{ opacity: 1, scale: 1 }"
      :delay="600"
    >
      <p class="text-sm font-body flex items-center justify-center gap-2 mb-2">
        <span class="animate-spin">🌟</span>
        <span class="font-semibold">Free Tier Adventure Notice!</span>
        <span class="animate-spin">🌟</span>
      </p>
      <p class="text-sm font-body italic">
        Running on free-tier servers, so it might be a bit slow... Think of it as adding dramatic suspense to your literary journey! 
        <span class="inline-block animate-bounce">🐌✨</span>
      </p>
    </div>

    <div class="flex flex-col items-center gap-6">
      <RouterLink 
        to="/search" 
        class="btn btn-primary group"
      >
        Try It Now!
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:rotate-90 transition-transform" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </RouterLink>
      
      <GithubLinks />
    </div>
  </section>
</template> 