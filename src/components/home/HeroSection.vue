<script setup>
    import { useI18n } from 'vue-i18n'
    const { t } = useI18n()
</script>

<template>
    <section class="hero section-grid" id="top">
        <div class="container hero-content">
            <div class="hero-copy">
                <div class="eyebrow"><span class="status-dot"></span>SOFTWARE DEVELOPMENT / AUTOMATION / DATA</div>
                <h1>SYSTEMS<br>THAT <span class="accent">WORK.</span><br>IDEAS THAT<br><span class="outline-text">SCALE.</span></h1>
                <p class="hero-description">{{ t('home.hero.description') }}</p>
                <div class="hero-actions">
                    <router-link :to="{ name: 'portfolio' }" class="button button-primary">{{ t('home.hero.projects') }} <span>↗</span></router-link>
                    <router-link :to="{ name: 'contact' }" class="button button-secondary">{{ t('home.hero.contact') }}</router-link>
                </div>
            </div>
            <div class="hero-visual">
                <div class="visual-label"><span>FIG. 001</span><span>SYSTEM ARCHITECTURE</span></div>
                <div class="system-graphic">
                    <div class="graphic-orbit orbit-one"></div><div class="graphic-orbit orbit-two"></div>
                    <div class="graphic-center"><span class="center-icon">S</span><span>SYSTEM CORE</span></div>
                    <div class="graphic-node node-one"><span class="node-icon">01</span><span>AUTOMATION</span></div>
                    <div class="graphic-node node-two"><span class="node-icon">02</span><span>DATA</span></div>
                    <div class="graphic-node node-three"><span class="node-icon">03</span><span>SOFTWARE</span></div>
                    <div class="graphic-node node-four"><span class="node-icon">04</span><span>ANALYTICS</span></div>
                </div>
                <div class="visual-footer"><span>ENGINEERED FOR EFFICIENCY</span><span>{{ t('home.footer.location') }} / 2026</span></div>
            </div>
        </div>
        <div class="hero-bottom"><div class="container hero-bottom-inner"><span>SCROLL TO EXPLORE</span><span class="scroll-line"></span><span>01 — 06</span></div></div>
    </section>
</template>