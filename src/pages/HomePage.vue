<script setup lang="ts">
import HeroSection from '@/components/home/HeroSection.vue'
import FeatureCard from '@/components/home/FeatureCard.vue'
import BestPartSection from '@/components/home/BestPartSection.vue'
import { features } from '@/data/features';

</script>

<template>
  <div>
    <HeroSection />
    
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
