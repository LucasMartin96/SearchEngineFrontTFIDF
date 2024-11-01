<template>
  <section 
    class="max-w-4xl mx-auto mt-16 text-center bg-theme-background-secondary p-8 rounded-lg shadow-lg relative overflow-hidden"
    v-motion
    :initial="{ opacity: 0, y: 20 }"
    :enter="{ opacity: 1, y: 0 }"
    :delay="400"
    :transition="{ duration: 300 }"
  >
    <!-- Decorative elements -->
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