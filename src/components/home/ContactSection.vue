<script setup>
    import { useI18n } from 'vue-i18n'
    const { t } = useI18n()
</script>

<template>
    <section class="contact-cta section-padding">
        <div class="container contact-inner">
            <div class="section-heading"><span class="section-number">06 / NEXT STEP</span><span class="section-tag">LET'S BUILD SOMETHING</span></div>
            <h2>{{ t('home.contact.title') }}<br><span class="accent">{{ t('home.contact.accent') }}</span></h2>
            <p>{{ t('home.contact.text') }}</p>
            <router-link :to="{ name: 'contact' }" class="button button-primary">{{ t('home.contact.link') }} <span>↗</span></router-link>
        </div>
    </section>
</template>