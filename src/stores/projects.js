import { defineStore } from 'pinia'

const screenshots = import.meta.glob('../assets/portfolio/screenshots/*', {
  eager: true,
  query: '?url',
  import: 'default',
})

export const useProjectsStore = defineStore('projects', {
  state: () => ({
    projects: [
      {
        id: 'planist-helper',
        featured: true,
        screenshot: 'planisthelper.webp',
        category: {
          pl: 'Wsparcie zarządzania',
          en: 'Management Support',
        },
        title: {
          pl: 'Program wspierający planowanie produkcji w odlewni żeliwa (do zastosowań własnych)',
          en: 'Software supporting production planning in an iron foundry (for internal use)',
        },
        description: {
          pl: 'Aplikacja pomagająca zebrać dane z bardzo wielu źródeł i przetwarzająca je, żeby wskazać aktualny stan magazynów i produkcji. Podstawowe narzędzie, jakiego potrzebują planiści w mojej aktualnej firmie.',
          en: 'An application that helps collect data from a wide variety of sources and processes it to show the current status of inventory and production. It is an essential tool for the planners at my current company.',
        },
        tags: ['Python', 'Django', 'Vue.js'],
        previewLabel: {
          pl: '01 / WSPARCIE PLANOWANIA PRODUKCJI',
          en: '01 / PRODUCTION PLANNING SUPPORT',
        },
      },
      {
        id: 'analytics-tools',
        featured: true,
        screenshot: null,
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
    getScreenshotUrl: () => (filename) => {
      if (!filename) return null

      const entry = Object.entries(screenshots).find(([path]) =>
        path.split('/').pop() === filename
      )

      return entry?.[1] ?? null
    },
  },
})
