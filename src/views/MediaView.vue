<script setup lang="ts">
import SectionHeader from '../components/SectionHeader.vue'
import { ref } from 'vue'

// Video sources (example data)
const videos = [
  {
    id: 'video1',
    title: 'Project Showcase',
    description: 'A demonstration of my latest web application with all its features and capabilities.',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with your actual video URL
    type: 'youtube'
  },
  {
    id: 'video2',
    title: 'Conference Talk',
    description: 'My presentation on modern web development practices at TechConf 2023.',
    embedUrl: 'https://player.vimeo.com/video/76979871', // Replace with your actual video URL
    type: 'vimeo'
  },
  {
    id: 'video3',
    title: 'Coding Tutorial',
    description: 'A step-by-step guide on building responsive web applications using Vue.js and Tailwind CSS.',
    embedUrl: 'https://www.youtube.com/embed/jS4aFq5-91M', // Replace with your actual video URL
    type: 'youtube'
  }
]

// Selected video for modal view
const selectedVideo = ref(null)
const isModalOpen = ref(false)

const openVideoModal = (video) => {
  selectedVideo.value = video
  isModalOpen.value = true
}

const closeVideoModal = () => {
  isModalOpen.value = false
  setTimeout(() => {
    selectedVideo.value = null
  }, 300) // Wait for animation to complete
}
</script>

<template>
  <div class="animate-fade-in">
    <SectionHeader 
      title="Videos & Media" 
      subtitle="Watch presentations and demonstrations of my work" 
    />
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div 
        v-for="video in videos" 
        :key="video.id"
        class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
      >
        <!-- Video thumbnail (placeholder) -->
        <div 
          class="relative h-48 bg-gray-200 dark:bg-gray-700 cursor-pointer"
          @click="openVideoModal(video)"
        >
          <!-- Thumbnail image would go here in a real app -->
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="bg-primary-600 bg-opacity-80 rounded-full p-4 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>
        
        <div class="p-4">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">{{ video.title }}</h3>
          <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">{{ video.description }}</p>
          <button 
            @click="openVideoModal(video)"
            class="text-primary-600 dark:text-primary-400 font-medium flex items-center hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
          >
            Watch Video
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    
    <!-- Video Modal -->
    <div 
      v-if="selectedVideo" 
      class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      :class="{ 'opacity-100': isModalOpen, 'opacity-0 pointer-events-none': !isModalOpen }"
      @click="closeVideoModal"
    >
      <div 
        class="bg-white dark:bg-gray-800 rounded-lg overflow-hidden max-w-4xl w-full transition-transform duration-300"
        :class="{ 'scale-100': isModalOpen, 'scale-95': !isModalOpen }"
        @click.stop
      >
        <div class="p-4 flex justify-between items-center border-b dark:border-gray-700">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ selectedVideo.title }}</h3>
          <button 
            @click="closeVideoModal"
            class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div class="aspect-w-16 aspect-h-9 bg-black">
          <iframe 
            :src="selectedVideo.embedUrl" 
            class="w-full h-96"
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
          ></iframe>
        </div>
        
        <div class="p-4">
          <p class="text-gray-600 dark:text-gray-300">{{ selectedVideo.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Ensure the aspect ratio for video embeds */
.aspect-w-16 {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
}

.aspect-w-16 iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>