<script setup lang="ts">
import HeroSection from '@/components/home/HeroSection.vue'
import FeatureCard from '@/components/home/FeatureCard.vue'
import BestPartSection from '@/components/home/BestPartSection.vue'

const features = [
  {
    title: 'Hey There!',
    emoji: '👋',
    content: 'Let me tell you about this cool project I\'ve been working on. You know how Google does its magic when you search for stuff? Well, I built something similar but WAY smaller (obviously, I\'m not trying to compete with Google here 😅).',
    delay: 100
  },
  {
    title: 'What It Does',
    emoji: '🔍',
    content: 'So basically, it\'s a search engine that can read books from Project Gutenberg and help you find specific stuff in them. Like, imagine you want to find all the times someone mentions "love" in Pride and Prejudice - that kind of thing.',
    delay: 200
  },
  {
    title: 'The Cool Tech Stuff',
    emoji: '🧮',
    content: 'The cool part is how it works behind the scenes. It uses this thing called TF-IDF which basically means if you search for "whale" in Moby Dick, it knows that\'s probably pretty important because, duh, it\'s a book about a whale!',
    delay: 300
  },
  {
    title: 'Under the Hood',
    emoji: '⚡',
    content: 'I built it using .NET 8 and PostgreSQL for the database. The whole thing is pretty fast because I added some tricks like caching and parallel processing (like having multiple people read different parts of a book at the same time).',
    delay: 400
  }
]
</script>

<template>
  <div>
    <HeroSection />
    
    <!-- Main Content -->
    <div class="container-custom py-16">
      <div class="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <FeatureCard
          v-for="feature in features"
          :key="feature.title"
          v-bind="feature"
        />
      </div>
      
      <BestPartSection />
    </div>
  </div>
</template>
