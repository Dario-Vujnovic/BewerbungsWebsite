import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    nav: {
      resume: 'Resume',
      coverLetter: 'Cover Letter',
      certificates: 'Certificates',
      media: 'Media',
      about: 'About Me',
      projects: 'Projects'
    },
    descriptions: {
      resume: 'View my qualifications, skills, and experience.',
      coverLetter: 'Read my professional introduction and motivation.',
      certificates: 'View my academic and professional certifications.',
      media: 'Watch videos showcasing my work and presentations.',
      about: 'Learn more about my background, interests, and goals.',
      projects: 'Explore my portfolio of IT projects and achievements.'
    },
    welcome: {
      title: 'Welcome to My Portfolio',
      subtitle: 'Thank you for taking the time to review my job application. Please explore the sections below to learn more about my qualifications and experience.'
    }
  },
  de: {
    nav: {
      resume: 'Lebenslauf',
      coverLetter: 'Anschreiben',
      certificates: 'Zertifikate',
      media: 'Medien',
      about: 'Über Mich',
      projects: 'Projekte'
    },
    descriptions: {
      resume: 'Sehen Sie meine Qualifikationen, Fähigkeiten und Erfahrungen.',
      coverLetter: 'Lesen Sie meine professionelle Vorstellung und Motivation.',
      certificates: 'Sehen Sie meine akademischen und beruflichen Zertifikate.',
      media: 'Schauen Sie sich Videos meiner Arbeit und Präsentationen an.',
      about: 'Erfahren Sie mehr über meinen Hintergrund, Interessen und Ziele.',
      projects: 'Entdecken Sie mein Portfolio von IT-Projekten und Erfolgen.'
    },
    welcome: {
      title: 'Willkommen in meinem Portfolio',
      subtitle: 'Vielen Dank, dass Sie sich Zeit nehmen, meine Bewerbung zu prüfen. Bitte erkunden Sie die folgenden Bereiche, um mehr über meine Qualifikationen und Erfahrungen zu erfahren.'
    }
  }
}

export const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages
})