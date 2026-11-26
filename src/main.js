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

const i18n = createI18n({
    legacy: false,
    locale: 'pl',
    fallbackLocale: 'pl',
    messages: { en, pl }
})

createApp(App).use(i18n).use(createPinia()).use(router).mount('#app')
