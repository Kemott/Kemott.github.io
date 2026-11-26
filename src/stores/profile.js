import { defineStore } from 'pinia'

export const useProfileStore = defineStore('profile', {
  state: () => ({
    name: 'Tomasz Burzyński',
    role: 'Twoja specjalizacja lub rola',
    location: 'Twoje miasto',
    bio: 'Kilka zdań o Tobie, Twoim doświadczeniu i tym, czym chcesz się podzielić.',
    links: [
      { label: 'GitHub', href: 'https://github.com/twoj-login' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/twoj-profil' },
      { label: 'E-mail', href: 'mailto:twoj@email.com' },
    ],
  }),
})
