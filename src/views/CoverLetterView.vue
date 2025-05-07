<script setup lang="ts">
import SectionHeader from '../components/SectionHeader.vue'

// Function to download cover letter as PDF (placeholder)
const downloadCoverLetter = () => {
  alert('In a real application, this would download a PDF version of the cover letter.')
}
</script>

<template>
  <div class="animate-fade-in">
    <SectionHeader 
      title="Cover Letter" 
      subtitle="My professional introduction and motivation" 
    />
    
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
      <div class="flex justify-end mb-6">
        <button 
          @click="downloadCoverLetter" 
          class="btn btn-primary flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download PDF
        </button>
      </div>
      
      <div class="prose dark:prose-invert max-w-none">
        <div class="mb-8">
          <p class="text-right mb-1">Your Name</p>
          <p class="text-right mb-1">City, Country</p>
          <p class="text-right mb-1">your.email@example.com</p>
          <p class="text-right">+1 (123) 456-7890</p>
          <p class="text-right mt-4">{{ new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) }}</p>
        </div>
        
        <div class="mb-8">
          <p class="mb-1">Hiring Manager</p>
          <p class="mb-1">Company Name</p>
          <p class="mb-1">Company Address</p>
          <p>City, Country</p>
        </div>
        
        <p class="font-medium">Dear Hiring Manager,</p>
        
        <p>
          I am writing to express my interest in the [Position Name] role at [Company Name]. With over 5 years of experience in developing modern web applications and a strong foundation in full-stack development, I am confident in my ability to make significant contributions to your team.
        </p>
        
        <p>
          Throughout my career, I have focused on delivering high-quality, user-centric solutions that align with business objectives. At Tech Innovations Inc., I led the development of scalable SaaS applications that improved user engagement by 35% and reduced operational costs by 25%. My expertise spans the entire development lifecycle, from concept and design to deployment and maintenance.
        </p>
        
        <p>
          What particularly excites me about [Company Name] is your commitment to innovation and your focus on [specific aspect of the company]. I am especially interested in your work on [specific project or product], and I believe my experience with [relevant technology or skill] would allow me to contribute effectively to this initiative.
        </p>
        
        <p>
          My technical skills include proficiency in Vue.js, React, Node.js, and cloud technologies such as AWS. I am well-versed in agile methodologies and have successfully led development teams to deliver projects on time and within budget. Beyond technical abilities, I bring strong communication skills, a collaborative mindset, and a passion for solving complex problems.
        </p>
        
        <p>
          I am particularly drawn to this opportunity because it aligns with my career goals of [your career goals]. I am excited about the possibility of bringing my skills and enthusiasm to your team and contributing to [Company Name]'s continued success.
        </p>
        
        <p>
          Thank you for considering my application. I look forward to the opportunity to discuss how my experience and skills align with your needs.
        </p>
        
        <p class="mb-1 mt-8">Sincerely,</p>
        <p>Your Name</p>
      </div>
    </div>
  </div>
</template>