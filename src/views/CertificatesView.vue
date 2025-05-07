<script setup lang="ts">
import SectionHeader from '../components/SectionHeader.vue'

// Sample certificates data
const academicCredentials = [
  {
    title: "Master of Computer Science",
    institution: "University of Technology",
    date: "2018",
    description: "Graduated with distinction, specializing in Software Engineering",
    imageUrl: "https://images.pexels.com/photos/4778611/pexels-photo-4778611.jpeg"
  },
  {
    title: "Bachelor of Science in Information Technology",
    institution: "City University",
    date: "2016",
    description: "First Class Honours, Dean's List all semesters",
    imageUrl: "https://images.pexels.com/photos/4778621/pexels-photo-4778621.jpeg"
  }
]

const professionalCertificates = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    validUntil: "2026",
    credentialId: "AWS-123456",
    imageUrl: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg"
  },
  {
    title: "Professional Scrum Master I",
    issuer: "Scrum.org",
    date: "2022",
    credentialId: "PSM-123456",
    imageUrl: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
  },
  {
    title: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    date: "2023",
    validUntil: "2025",
    credentialId: "GCP-123456",
    imageUrl: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg"
  }
]
</script>

<template>
  <div class="animate-fade-in">
    <SectionHeader 
      title="Certificates & Diplomas" 
      subtitle="Academic credentials and professional certifications" 
    />
    
    <!-- Academic Credentials -->
    <div class="mb-12">
      <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Academic Credentials</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div 
          v-for="credential in academicCredentials" 
          :key="credential.title"
          class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
        >
          <div class="h-48 bg-gray-200 dark:bg-gray-700">
            <img 
              :src="credential.imageUrl" 
              :alt="credential.title"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {{ credential.title }}
            </h3>
            <p class="text-primary-600 dark:text-primary-400 mb-2">
              {{ credential.institution }}
            </p>
            <p class="text-gray-600 dark:text-gray-300 text-sm mb-2">
              Awarded: {{ credential.date }}
            </p>
            <p class="text-gray-700 dark:text-gray-300">
              {{ credential.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Professional Certificates -->
    <div>
      <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Professional Certifications</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="cert in professionalCertificates" 
          :key="cert.title"
          class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
        >
          <div class="h-40 bg-gray-200 dark:bg-gray-700">
            <img 
              :src="cert.imageUrl" 
              :alt="cert.title"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="p-6">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {{ cert.title }}
            </h3>
            <p class="text-primary-600 dark:text-primary-400 mb-2">
              {{ cert.issuer }}
            </p>
            <div class="text-sm text-gray-600 dark:text-gray-300">
              <p class="mb-1">Issued: {{ cert.date }}</p>
              <p v-if="cert.validUntil" class="mb-1">Valid until: {{ cert.validUntil }}</p>
              <p>Credential ID: {{ cert.credentialId }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>