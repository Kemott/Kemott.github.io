import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createPinia } from 'pinia'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './assets/main.css'
import App from './App.vue'
import router from './router'
import en from './locales/en.json'
import pl from './locales/pl.json'

const messages = { en, pl }
const supportedLocales = Object.keys(messages)
const defaultLocale = supportedLocales.includes('en')
    ? 'en'
    : (supportedLocales.includes('pl') ? 'pl' : supportedLocales[0])

function detectLocale() {
    const savedLocale = localStorage.getItem('locale')
    if (supportedLocales.includes(savedLocale)) {
        return savedLocale
    }

    const browserLocales = navigator.languages?.length
        ? navigator.languages
        : [navigator.language]

    for (const browserLocale of browserLocales) {
        if (!browserLocale) continue

        const normalizedLocale = browserLocale.toLowerCase().replace('_', '-')

        if (supportedLocales.includes(normalizedLocale)) {
            return normalizedLocale
        }

        const baseLocale = normalizedLocale.split('-')[0]
        if (supportedLocales.includes(baseLocale)) {
            return baseLocale
        }
    }

    return defaultLocale
}

const i18n = createI18n({
    legacy: false,
    locale: detectLocale(),
    fallbackLocale: defaultLocale,
    messages
})

createApp(App).use(i18n).use(createPinia()).use(router).mount('#app')
