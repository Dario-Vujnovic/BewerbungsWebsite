<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import ThemeToggle from './components/ThemeToggle.vue'
import LanguageToggle from './components/LanguageToggle.vue'

const route = useRoute()
const pageTitle = ref('My Portfolio')

// Update page title based on current route
watch(() => route.meta.title, (newTitle) => {
  if (newTitle) {
    pageTitle.value = `${newTitle} | My Portfolio`
    document.title = pageTitle.value
  }
})

// Check for theme preference
onMounted(() => {
  // Initialize theme if saved in localStorage
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'dark' || 
    (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  }
})
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <!-- Theme Toggle -->
    <div class="fixed top-4 right-4 z-50">
      <ThemeToggle />
    </div>
    
    <!-- Language Toggle -->
    <LanguageToggle />
    
    <!-- Main Content -->
    <router-view v-slot="{ Component }">
      <transition name="page-transition" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>