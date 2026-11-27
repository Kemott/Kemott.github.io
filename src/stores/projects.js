import { defineStore } from 'pinia'

export const useProjectsStore = defineStore('projects', {
  state: () => ({
    projects: [
      {
        id: 'process-management',
        featured: true,
        preview: 'dashboard',
        category: {
          pl: 'Oprogramowanie biznesowe',
          en: 'Business software',
        },
        title: {
          pl: 'System zarządzania procesami',
          en: 'Process management system',
        },
        description: {
          pl: 'Aplikacja wspierająca organizację pracy, zarządzanie danymi i planowanie procesów.',
          en: 'An application supporting work organization, data management, and process planning.',
        },
        tags: ['Python', 'Django', 'Vue.js'],
        previewLabel: {
          pl: '01 / SYSTEM BIZNESOWY',
          en: '01 / BUSINESS SYSTEM',
        },
      },
      {
        id: 'analytics-tools',
        featured: true,
        preview: 'analytics',
        category: {
          pl: 'Dane i automatyzacja',
          en: 'Data & automation',
        },
        title: {
          pl: 'Narzędzia analityczne',
          en: 'Analytics tools',
        },
        description: {
          pl: 'Rozwiązania do agregowania danych, automatycznego przetwarzania informacji i wspomagania decyzji.',
          en: 'Solutions for aggregating data, automatically processing information, and supporting decisions.',
        },
        tags: ['Python', 'Data Processing', 'Automation'],
        previewLabel: {
          pl: '02 / ANALIZA DANYCH',
          en: '02 / DATA ANALYTICS',
        },
      },
    ],
  }),
  getters: {
    allProjects: (state) => state.projects,
    featuredProjects: (state) => state.projects.filter((project) => project.featured),
  },
})
