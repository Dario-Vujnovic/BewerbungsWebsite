<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const password = ref('')
const error = ref('')
const isLoading = ref(false)

// This would normally be stored securely on a server
const CORRECT_PASSWORD = 'application2025'

const login = () => {
  error.value = ''
  isLoading.value = true
  
  // Simulate API call with setTimeout
  setTimeout(() => {
    if (password.value === CORRECT_PASSWORD) {
      // Set authentication in localStorage
      localStorage.setItem('isAuthenticated', 'true')
      // Redirect to home page
      router.push({ name: 'home' })
    } else {
      error.value = 'Incorrect password. Please try again.'
    }
    isLoading.value = false
  }, 800)
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8 animate-fade-in">
      <div class="text-center">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white">My Portfolio</h1>
        <p class="mt-2 text-gray-600 dark:text-gray-300">Please enter the password to view my application</p>
      </div>
      
      <div class="mt-8 bg-white dark:bg-gray-800 py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
        <form @submit.prevent="login" class="space-y-6">
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <div class="mt-1">
              <input 
                id="password" 
                type="password" 
                v-model="password" 
                required 
                class="input"
                placeholder="Enter password"
                autocomplete="current-password"
              />
            </div>
          </div>
          
          <div v-if="error" class="text-sm text-error-600 dark:text-error-400">
            {{ error }}
          </div>
          
          <div>
            <button 
              type="submit" 
              class="btn btn-primary w-full flex justify-center"
              :disabled="isLoading"
            >
              <svg v-if="isLoading" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {{ isLoading ? 'Verifying...' : 'Enter Portfolio' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>