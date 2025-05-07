<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterView } from 'vue-router'

const { t } = useI18n()

// Track active section
const activeSection = ref<string | null>(null)

const toggleSection = (section: string) => {
  activeSection.value = activeSection.value === section ? null : section
}

// Icons components
const DocumentIcon = {
  template: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>`
}

const DocumentTextIcon = {
  template: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>`
}

const FilmIcon = {
  template: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
  </svg>`
}

const UserIcon = {
  template: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>`
}

const CodeIcon = {
  template: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>`
}

const AcademicIcon = {
  template: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z" />
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
  </svg>`
}

const sections = [
  {
    id: 'resume',
    title: t('nav.resume'),
    description: t('descriptions.resume'),
    icon: DocumentIcon,
    component: 'ResumeView'
  },
  {
    id: 'cover-letter',
    title: t('nav.coverLetter'),
    description: t('descriptions.coverLetter'),
    icon: DocumentTextIcon,
    component: 'CoverLetterView'
  },
  {
    id: 'certificates',
    title: t('nav.certificates'),
    description: t('descriptions.certificates'),
    icon: AcademicIcon,
    component: 'CertificatesView'
  },
  {
    id: 'media',
    title: t('nav.media'),
    description: t('descriptions.media'),
    icon: FilmIcon,
    component: 'MediaView'
  },
  {
    id: 'about',
    title: t('nav.about'),
    description: t('descriptions.about'),
    icon: UserIcon,
    component: 'AboutView'
  },
  {
    id: 'projects',
    title: t('nav.projects'),
    description: t('descriptions.projects'),
    icon: CodeIcon,
    component: 'ProjectsView'
  }
]
</script>

<template>
  <div class="animate-fade-in">
    <section class="text-center mb-12">
      <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
        {{ t('welcome.title') }}
      </h1>
      <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        {{ t('welcome.subtitle') }}
      </p>
    </section>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div 
        v-for="section in sections" 
        :key="section.id"
        class="animate-slide-up"
      >
        <div 
          class="nav-card group cursor-pointer"
          :class="{ 'ring-2 ring-primary-500': activeSection === section.id }"
          @click="toggleSection(section.id)"
        >
          <div class="flex flex-col items-center">
            <div class="w-16 h-16 mb-4 flex items-center justify-center text-primary-500 dark:text-primary-400 group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors duration-300">
              <component :is="section.icon" class="w-12 h-12" />
            </div>
            <h3 class="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors duration-300">
              {{ section.title }}
            </h3>
            <p class="text-center text-gray-600 dark:text-gray-300">
              {{ section.description }}
            </p>
          </div>
        </div>
        
        <!-- Expanded Content -->
        <div 
          v-if="activeSection === section.id"
          class="mt-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 animate-slide-up"
        >
          <component :is="section.component" />
        </div>
      </div>
    </div>
  </div>
</template>