<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  title: string
  subtitle?: string
}>()
</script>

<template>
  <div class="mb-8">
    <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">{{ title }}</h1>
    <p v-if="subtitle" class="text-lg text-gray-600 dark:text-gray-300">{{ subtitle }}</p>
    <div class="h-1 w-20 bg-primary-500 mt-4"></div>
  </div>
</template>