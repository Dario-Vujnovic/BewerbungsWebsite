<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  title: string
  description: string
  imageUrl: string
  technologies: string[]
  projectUrl?: string
}>()
</script>

<template>
  <div class="card hover:shadow-lg transition-all duration-300 h-full flex flex-col">
    <div class="h-48 overflow-hidden">
      <img :src="imageUrl" :alt="title" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105">
    </div>
    <div class="p-6 flex-grow flex flex-col">
      <h3 class="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{{ title }}</h3>
      <p class="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{{ description }}</p>
      
      <div class="mt-auto">
        <div class="flex flex-wrap gap-2 mb-4">
          <span 
            v-for="tech in technologies" 
            :key="tech"
            class="px-2 py-1 bg-secondary-100 dark:bg-secondary-900 text-secondary-800 dark:text-secondary-200 text-xs rounded-md"
          >
            {{ tech }}
          </span>
        </div>
        
        <a 
          v-if="projectUrl" 
          :href="projectUrl" 
          target="_blank" 
          rel="noopener noreferrer"
          class="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
        >
          View Project
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>