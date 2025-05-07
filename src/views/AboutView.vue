<script setup lang="ts">
import SectionHeader from '../components/SectionHeader.vue'
</script>

<template>
  <div class="animate-fade-in">
    <SectionHeader 
      title="About Me" 
      subtitle="My background, interests, and career aspirations" 
    />
    
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Personal Photo -->
      <div class="lg:col-span-1">
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div class="h-64 bg-gray-200 dark:bg-gray-700">
            <!-- Replace with your actual photo -->
            <img 
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Professional headshot" 
              class="w-full h-full object-cover"
            />
          </div>
          
          <div class="p-4">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Your Name</h3>
            <p class="text-primary-600 dark:text-primary-400 mb-4">Full Stack Developer</p>
            
            <div class="flex items-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:your.email@example.com" class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">your.email@example.com</a>
            </div>
            
            <div class="flex items-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span class="text-gray-700 dark:text-gray-300">+1 (123) 456-7890</span>
            </div>
            
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span class="text-gray-700 dark:text-gray-300">City, Country</span>
            </div>
            
            <div class="border-t border-gray-200 dark:border-gray-700 mt-4 pt-4">
              <h4 class="font-medium text-gray-900 dark:text-white mb-3">Connect</h4>
              <div class="flex space-x-4">
                <!-- LinkedIn -->
                <a href="#" class="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500 transition-colors">
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <!-- GitHub -->
                <a href="#" class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
                  </svg>
                </a>
                <!-- Twitter -->
                <a href="#" class="text-gray-500 hover:text-blue-400 dark:text-gray-400 dark:hover:text-blue-300 transition-colors">
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- About Content -->
      <div class="lg:col-span-2">
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <div class="prose dark:prose-invert max-w-none">
            <h3>My Journey</h3>
            <p>
              I am a passionate Full Stack Developer with a deep interest in building intuitive, user-centric web applications. My journey in tech began during my undergraduate studies when I developed my first web application for a local nonprofit organization. This experience ignited my passion for creating digital solutions that make a real impact.
            </p>
            
            <p>
              Over the past five years, I've had the opportunity to work with diverse teams across various industries, from startups to established enterprises. This variety has given me a unique perspective on software development and has honed my ability to adapt to different project requirements and team dynamics.
            </p>
            
            <h3>Technical Philosophy</h3>
            <p>
              I believe in writing clean, maintainable code that stands the test of time. My approach to development centers around three key principles:
            </p>
            
            <ul>
              <li>
                <strong>User-Centered Design</strong>: Every line of code I write is with the end-user in mind. Technology should solve problems seamlessly.
              </li>
              <li>
                <strong>Continuous Learning</strong>: The tech landscape evolves rapidly, and I am committed to staying ahead of the curve by regularly exploring new technologies and methodologies.
              </li>
              <li>
                <strong>Collaborative Development</strong>: The best products are built by teams that communicate effectively and leverage each member's strengths.
              </li>
            </ul>
            
            <h3>Beyond Coding</h3>
            <p>
              When I'm not immersed in code, you can find me exploring hiking trails, experimenting with new recipes, or contributing to open-source projects. I'm also passionate about mentoring aspiring developers and regularly participate in coding workshops and hackathons.
            </p>
            
            <h3>Career Goals</h3>
            <p>
              Looking forward, I aim to continue growing as a developer while taking on more leadership responsibilities. I'm particularly interested in opportunities that allow me to contribute to projects with a positive social impact, and I'm excited about exploring emerging technologies like AI and blockchain.
            </p>
            
            <p>
              I believe that my technical skills, combined with my passion for problem-solving and collaboration, make me a valuable addition to any forward-thinking team. I'm excited about the possibility of bringing my experience and enthusiasm to your organization.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.prose {
  max-width: 100%;
}

.prose h3 {
  @apply text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-4;
}

.prose p {
  @apply text-gray-700 dark:text-gray-300 mb-4;
}

.prose ul {
  @apply list-disc pl-5 mb-4;
}

.prose li {
  @apply text-gray-700 dark:text-gray-300 mb-2;
}

.prose strong {
  @apply font-semibold text-gray-900 dark:text-white;
}
</style>