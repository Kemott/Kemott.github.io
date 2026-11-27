<script setup>
    import { useI18n } from 'vue-i18n'
    const { t } = useI18n()
</script>

<template>
    <section class="intro section-padding" id="about">
        <div class="container">
            <div class="section-heading"><span class="section-number">01 / INTRODUCTION</span><span class="section-tag">ABOUT MY APPROACH</span></div>
            <div class="intro-layout">
                <h2>{{ t('home.intro.title') }}<br><span class="accent">{{ t('home.intro.accent') }}</span></h2>
                <div class="intro-description">
                    <p>{{ t('home.intro.textOne') }}</p><p>{{ t('home.intro.textTwo') }}</p>
                    <router-link :to="{ name: 'cv' }" class="text-link">{{ t('home.intro.link') }} <span>↗</span></router-link>
                </div>
            </div>
        </div>
    </section>
</template>