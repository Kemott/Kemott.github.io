<script setup>
    import { useI18n } from 'vue-i18n'
    const { t } = useI18n()
</script>

<template>
    <section class="technologies section-padding">
        <div class="container">
            <div class="section-heading"><span class="section-number">05 / TECHNOLOGY STACK</span><span class="section-tag">TOOLS & TECHNOLOGIES</span></div>
            <div class="technology-layout">
                <div><h2>{{ t('home.technology.title') }}<br><span class="accent">{{ t('home.technology.accent') }}</span></h2><p>{{ t('home.technology.text') }}</p></div>
                <div class="technology-groups">
                    <div class="technology-group"><span class="tech-category">BACKEND & LOGIC</span><div class="tech-list"><span>Python</span><span>Django</span><span>PHP</span><span>Laravel</span></div></div>
                    <div class="technology-group"><span class="tech-category">FRONTEND</span><div class="tech-list"><span>JavaScript</span><span>Vue.js</span><span>HTML</span><span>CSS</span></div></div>
                    <div class="technology-group"><span class="tech-category">DATA & INFRASTRUCTURE</span><div class="tech-list"><span>SQL</span><span>REST API</span><span>Git</span><span>Automation</span></div></div>
                </div>
            </div>
        </div>
    </section>
</template>