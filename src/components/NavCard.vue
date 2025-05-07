<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  title: string
  description: string
  icon: string
  to: string
}>()
</script>

<template>
  <router-link :to="to" class="block">
    <div class="nav-card group">
      <div class="flex flex-col items-center">
        <div class="w-16 h-16 mb-4 flex items-center justify-center text-primary-500 dark:text-primary-400 group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors duration-300">
          <component :is="icon" class="w-12 h-12" />
        </div>
        <h3 class="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors duration-300">
          {{ title }}
        </h3>
        <p class="text-center text-gray-600 dark:text-gray-300">
          {{ description }}
        </p>
      </div>
    </div>
  </router-link>
</template>