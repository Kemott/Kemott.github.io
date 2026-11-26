import { defineStore } from 'pinia'

export const useProfileStore = defineStore('profile', {
  state: () => ({
    name: 'Tomasz Burzyński',
    role: 'role.value',
    location: 'home.value',
    bio: 'bio.value',
    links: [
      { label: 'GitHub', href: 'https://github.com/Kemott' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tburzynski' },
      { label: 'E-mail', href: 'mailto:tomasz.burzynski.91@email.com' },
    ],
  }),
})
