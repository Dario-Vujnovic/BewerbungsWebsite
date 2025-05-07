<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const toggleLanguage = () => {
  locale.value = locale.value === 'en' ? 'de' : 'en'
  localStorage.setItem('language', locale.value)
}
</script>

<template>
  <button 
    @click="toggleLanguage"
    class="fixed top-4 left-4 z-50 px-3 py-1 rounded-md bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300 text-sm font-medium text-gray-700 dark:text-gray-300"
  >
    {{ locale === 'en' ? 'DE' : 'EN' }}
  </button>
</template>