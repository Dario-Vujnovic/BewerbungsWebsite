<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isMobileMenuOpen = ref(false)

const logout = () => {
  // Clear authentication
  localStorage.removeItem('isAuthenticated')
  // Redirect to login
  router.push({ name: 'login' })
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// Close mobile menu when navigating
router.afterEach(() => {
  isMobileMenuOpen.value = false
})
</script>

<template>
  <div class="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
    <!-- Navigation -->
    <header class="bg-white dark:bg-gray-800 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <!-- Logo -->
            <div class="flex-shrink-0 flex items-center">
              <router-link to="/" class="text-xl font-bold text-primary-600 dark:text-primary-400">
                MyPortfolio
              </router-link>
            </div>
            
            <!-- Desktop Navigation -->
            <nav class="hidden md:ml-6 md:flex md:space-x-4">
              <router-link 
                v-for="item in [
                  { name: 'home', path: '/', label: 'Home' },
                  { name: 'resume', path: '/resume', label: 'Resume' },
                  { name: 'cover-letter', path: '/cover-letter', label: 'Cover Letter' },
                  { name: 'certificates', path: '/certificates', label: 'Certificates' },
                  { name: 'media', path: '/media', label: 'Media' },
                  { name: 'about', path: '/about', label: 'About Me' },
                  { name: 'projects', path: '/projects', label: 'Projects' }
                ]"
                :key="item.name"
                :to="item.path"
                class="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                :class="[$route.name === item.name 
                  ? 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300' 
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white']"
              >
                {{ item.label }}
              </router-link>
            </nav>
          </div>
          
          <div class="flex items-center">
            <!-- Logout button -->
            <button 
              @click="logout"
              class="ml-4 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-200"
            >
              Logout
            </button>
            
            <!-- Mobile menu button -->
            <div class="ml-2 md:hidden">
              <button 
                @click="toggleMobileMenu"
                class="p-2 rounded-md text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white focus:outline-none"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path v-if="isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Mobile menu -->
      <div v-if="isMobileMenuOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <router-link 
            v-for="item in [
              { name: 'home', path: '/', label: 'Home' },
              { name: 'resume', path: '/resume', label: 'Resume' },
              { name: 'cover-letter', path: '/cover-letter', label: 'Cover Letter' },
              { name: 'certificates', path: '/certificates', label: 'Certificates' },
              { name: 'media', path: '/media', label: 'Media' },
              { name: 'about', path: '/about', label: 'About Me' },
              { name: 'projects', path: '/projects', label: 'Projects' }
            ]"
            :key="item.name"
            :to="item.path"
            class="block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            :class="[$route.name === item.name 
              ? 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300' 
              : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white']"
          >
            {{ item.label }}
          </router-link>
        </div>
      </div>
    </header>
    
    <!-- Main content -->
    <main class="flex-1">
      <div class="page-container">
        <router-view v-slot="{ Component }">
          <transition name="page-transition" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </main>
    
    <!-- Footer -->
    <footer class="bg-white dark:bg-gray-800 shadow-inner">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div class="text-center text-gray-500 dark:text-gray-400 text-sm">
          &copy; {{ new Date().getFullYear() }} My Portfolio. All rights reserved.
        </div>
      </div>
    </footer>
  </div>
</template>