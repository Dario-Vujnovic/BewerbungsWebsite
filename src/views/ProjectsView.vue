<script setup lang="ts">
import SectionHeader from '../components/SectionHeader.vue'
import ProjectCard from '../components/ProjectCard.vue'

// Project data
const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured online store built with Vue.js and Node.js, featuring user authentication, product catalog, shopping cart, and payment processing.',
    imageUrl: 'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Vue.js', 'Node.js', 'Express', 'MongoDB', 'Stripe API'],
    projectUrl: '#'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A productivity application for teams to manage projects, assign tasks, track progress, and collaborate effectively.',
    imageUrl: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['React', 'Redux', 'Firebase', 'Material UI', 'Jest'],
    projectUrl: '#'
  },
  {
    id: 3,
    title: 'Health & Fitness Tracker',
    description: 'A mobile-friendly web application for tracking workouts, nutrition, and health metrics with data visualization and goal setting.',
    imageUrl: 'https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Vue.js', 'TypeScript', 'Chart.js', 'TailwindCSS', 'Firebase'],
    projectUrl: '#'
  },
  {
    id: 4,
    title: 'Real Estate Listing Platform',
    description: 'A property listing website with advanced search features, map integration, and virtual tour capabilities.',
    imageUrl: 'https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Angular', 'Node.js', 'PostgreSQL', 'Google Maps API', 'AWS'],
    projectUrl: '#'
  },
  {
    id: 5,
    title: 'Content Management System',
    description: 'A custom CMS built for a media company to manage articles, media assets, and subscriber content with role-based access control.',
    imageUrl: 'https://images.pexels.com/photos/6335/man-coffee-cup-pen.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['React', 'GraphQL', 'Node.js', 'MongoDB', 'AWS S3'],
    projectUrl: '#'
  },
  {
    id: 6,
    title: 'Weather Forecast App',
    description: 'A responsive weather application providing current conditions and forecasts with location detection and interactive maps.',
    imageUrl: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Vue.js', 'OpenWeather API', 'Geolocation API', 'TailwindCSS'],
    projectUrl: '#'
  }
]
</script>

<template>
  <div class="animate-fade-in">
    <SectionHeader 
      title="IT Projects" 
      subtitle="A showcase of my technical work and achievements" 
    />
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div 
        v-for="project in projects" 
        :key="project.id"
        class="h-full"
      >
        <ProjectCard 
          :title="project.title"
          :description="project.description"
          :imageUrl="project.imageUrl"
          :technologies="project.technologies"
          :projectUrl="project.projectUrl"
        />
      </div>
    </div>
  </div>
</template>