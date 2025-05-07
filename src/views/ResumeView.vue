<script setup lang="ts">
import SectionHeader from '../components/SectionHeader.vue'

// Sample resume data
const personalInfo = {
  name: 'Your Name',
  title: 'Full Stack Developer',
  email: 'your.email@example.com',
  phone: '+1 (123) 456-7890',
  location: 'City, Country',
  summary: 'Passionate and results-driven Full Stack Developer with 5+ years of experience building innovative web applications. Proficient in modern JavaScript frameworks, cloud technologies, and agile methodologies.'
}

const experience = [
  {
    title: 'Senior Developer',
    company: 'Tech Innovations Inc.',
    period: 'Jan 2020 - Present',
    description: 'Lead developer for enterprise-level SaaS applications serving over 100,000 users. Implemented CI/CD pipelines reducing deployment time by 60%. Mentored junior developers and conducted code reviews.',
    achievements: [
      'Reduced application load time by 40% through code optimization',
      'Implemented microservices architecture improving scalability',
      'Led team of 5 developers to deliver major feature releases on time'
    ]
  },
  {
    title: 'Web Developer',
    company: 'Digital Solutions Ltd.',
    period: 'Mar 2018 - Dec 2019',
    description: 'Developed responsive web applications using Vue.js, Node.js, and MongoDB. Collaborated with UX/UI designers to implement modern, user-friendly interfaces.',
    achievements: [
      'Created reusable component library reducing development time by 30%',
      'Integrated third-party APIs improving application functionality',
      'Implemented automated testing achieving 85% code coverage'
    ]
  }
]

const education = [
  {
    degree: 'Master of Computer Science',
    institution: 'University of Technology',
    period: '2016 - 2018',
    description: 'Specialized in Software Engineering with focus on modern web technologies and cloud computing.'
  },
  {
    degree: 'Bachelor of Science in Information Technology',
    institution: 'City University',
    period: '2012 - 2016',
    description: 'Graduated with honors. Participated in multiple hackathons and coding competitions.'
  }
]

const skills = [
  { category: 'Frontend', items: ['Vue.js', 'React', 'Angular', 'JavaScript/TypeScript', 'HTML5/CSS3', 'Tailwind CSS', 'SASS/SCSS'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'Python', 'Django', 'PHP', 'Laravel', 'RESTful APIs', 'GraphQL'] },
  { category: 'Database', items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase'] },
  { category: 'DevOps', items: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Git', 'GitHub Actions'] }
]

// Function to download resume as PDF (placeholder)
const downloadResume = () => {
  alert('In a real application, this would download a PDF version of the resume.')
}
</script>

<template>
  <div class="animate-fade-in">
    <SectionHeader 
      title="CV / Resume" 
      subtitle="A comprehensive overview of my professional experience and skills" 
    />
    
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
      <!-- Header/Intro -->
      <div class="border-b border-gray-200 dark:border-gray-700 pb-6 mb-6">
        <div class="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
          <div>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white">{{ personalInfo.name }}</h2>
            <p class="text-lg text-primary-600 dark:text-primary-400">{{ personalInfo.title }}</p>
          </div>
          <button 
            @click="downloadResume" 
            class="mt-4 md:mt-0 btn btn-primary flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download PDF
          </button>
        </div>
        
        <div class="flex flex-wrap gap-y-2 gap-x-6 text-sm text-gray-600 dark:text-gray-300 mb-4">
          <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {{ personalInfo.email }}
          </div>
          <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {{ personalInfo.phone }}
          </div>
          <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {{ personalInfo.location }}
          </div>
        </div>
        
        <p class="text-gray-700 dark:text-gray-300">{{ personalInfo.summary }}</p>
      </div>
      
      <!-- Experience -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Professional Experience</h3>
        
        <div 
          v-for="(job, index) in experience" 
          :key="index" 
          class="mb-6 last:mb-0"
        >
          <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
            <div>
              <h4 class="text-lg font-medium text-gray-900 dark:text-white">{{ job.title }}</h4>
              <p class="text-primary-600 dark:text-primary-400">{{ job.company }}</p>
            </div>
            <div class="text-sm text-gray-500 dark:text-gray-400 mt-1 md:mt-0">{{ job.period }}</div>
          </div>
          
          <p class="text-gray-700 dark:text-gray-300 mb-2">{{ job.description }}</p>
          
          <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 pl-4">
            <li v-for="(achievement, i) in job.achievements" :key="i" class="mb-1">
              {{ achievement }}
            </li>
          </ul>
        </div>
      </div>
      
      <!-- Education -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Education</h3>
        
        <div 
          v-for="(edu, index) in education" 
          :key="index" 
          class="mb-6 last:mb-0"
        >
          <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
            <div>
              <h4 class="text-lg font-medium text-gray-900 dark:text-white">{{ edu.degree }}</h4>
              <p class="text-primary-600 dark:text-primary-400">{{ edu.institution }}</p>
            </div>
            <div class="text-sm text-gray-500 dark:text-gray-400 mt-1 md:mt-0">{{ edu.period }}</div>
          </div>
          
          <p class="text-gray-700 dark:text-gray-300">{{ edu.description }}</p>
        </div>
      </div>
      
      <!-- Skills -->
      <div>
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Skills & Expertise</h3>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div v-for="(skillset, index) in skills" :key="index">
            <h4 class="font-medium text-gray-900 dark:text-white mb-2">{{ skillset.category }}</h4>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="(skill, i) in skillset.items" 
                :key="i"
                class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>