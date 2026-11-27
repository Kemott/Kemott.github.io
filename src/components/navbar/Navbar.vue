<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useProfileStore } from '../../stores/profile'

const { t, locale } = useI18n()
const profile = useProfileStore()
const menuOpen = ref(false)

function changeLanguage(language) {
    locale.value = language
    localStorage.setItem('locale', language)
}
</script>

<template>
    <header class="site-header">
        <div class="container header-inner">
            <router-link :to="{ name: 'home' }" class="brand">
                <span class="brand-symbol">TB.</span>
                <span class="brand-name">
                    <strong>{{ profile.name }}</strong>
                    <small>SOFTWARE & ENGINEERING</small>
                </span>
            </router-link>

            <div class="header-actions">
                <div class="language-switcher" :aria-label="t('navbar.language.label')">
                    <button type="button" class="language-option" :class="{ active: locale === 'pl' }" :aria-pressed="locale === 'pl'" @click="changeLanguage('pl')">PL</button>
                    <span class="language-divider">/</span>
                    <button type="button" class="language-option" :class="{ active: locale === 'en' }" :aria-pressed="locale === 'en'" @click="changeLanguage('en')">EN</button>
                </div>
                <button class="menu-toggle" type="button" :aria-expanded="menuOpen" aria-controls="main-navigation" @click="menuOpen = !menuOpen">
                    <span></span><span></span>
                </button>
            </div>

            <nav id="main-navigation" class="main-navigation" :class="{ open: menuOpen }">
                <a href="/#about" @click="menuOpen = false">{{ t('navbar.items.about') }}</a>
                <router-link :to="{ name: 'portfolio' }" @click="menuOpen = false">{{ t('navbar.items.portfolio.label') }}</router-link>
                <router-link :to="{ name: 'services' }" @click="menuOpen = false">{{ t('navbar.items.services.label') }}</router-link>
                <router-link :to="{ name: 'cv' }" @click="menuOpen = false">{{ t('navbar.items.cv') }}</router-link>
                <router-link :to="{ name: 'contact' }" class="nav-contact" @click="menuOpen = false">{{ t('navbar.items.contact.label') }} <span>↗</span></router-link>
            </nav>
        </div>
    </header>
</template>
