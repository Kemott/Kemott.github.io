<script setup>
    import { useI18n } from 'vue-i18n'
    const { t } = useI18n()
</script>

<template>
    <section class="services section-padding section-grid">
        <div class="container">
            <div class="section-heading"><span class="section-number">02 / CAPABILITIES</span><span class="section-tag">WHAT I DO</span></div>
            <div class="section-title-row">
                <h2>{{ t('home.services.title') }}<span class="accent">.</span></h2>
                <router-link :to="{ name: 'services' }" class="text-link">{{ t('home.services.link') }} <span>↗</span></router-link>
            </div>
            <div class="services-grid">
                <article v-for="(service, index) in 4" :key="index" class="service-card">
                    <div class="card-top"><span class="card-number">0{{ index + 1 }}</span><span class="card-icon">↗</span></div>
                    <h3>{{ t(`home.services.items.${index}.title`) }}</h3>
                    <p>{{ t(`home.services.items.${index}.text`) }}</p>
                    <div class="card-tags"><span>{{ t(`home.services.items.${index}.tagOne`) }}</span><span>{{ t(`home.services.items.${index}.tagTwo`) }}</span></div>
                </article>
            </div>
        </div>
    </section>
</template>