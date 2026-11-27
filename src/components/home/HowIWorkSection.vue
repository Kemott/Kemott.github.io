<script setup>
    import { useI18n } from 'vue-i18n'
    const { t } = useI18n()
</script>

<template>
    <section class="process section-padding section-grid">
        <div class="container">
            <div class="section-heading"><span class="section-number">04 / METHODOLOGY</span><span class="section-tag">HOW I WORK</span></div>
            <h2>{{ t('home.process.title') }}<br>{{ t('home.process.accent') }}<span class="accent">.</span></h2>
            <div class="process-grid">
                <article v-for="(step, index) in 4" :key="index" class="process-step">
                    <span class="step-number">0{{ index + 1 }}</span><h3>{{ t(`home.process.items.${index}.title`) }}</h3><p>{{ t(`home.process.items.${index}.text`) }}</p>
                </article>
            </div>
        </div>
    </section>
</template>