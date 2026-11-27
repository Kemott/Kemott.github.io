<script setup>
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useProfileStore } from '../stores/profile'

const { t } = useI18n()
const profile = useProfileStore()

onMounted(() => {
    const elements = document.querySelectorAll('.section-heading, .intro-layout, .service-card, .project-item, .process-step, .technology-layout, .contact-inner')
    if (!('IntersectionObserver' in window)) {
        elements.forEach((element) => element.classList.add('visible'))
        return
    }
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible')
                observer.unobserve(entry.target)
            }
        })
    }, { threshold: 0.12 })
    elements.forEach((element) => {
        element.classList.add('reveal')
        observer.observe(element)
    })
})
</script>

<template>
    <main>
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

        <section class="projects section-padding">
            <div class="container">
                <div class="section-heading"><span class="section-number">03 / SELECTED WORK</span><span class="section-tag">PROJECTS & EXPERIMENTS</span></div>
                <div class="section-title-row">
                    <h2>{{ t('home.projects.title') }}<span class="accent">.</span></h2>
                    <router-link :to="{ name: 'portfolio' }" class="text-link">{{ t('home.projects.link') }} <span>↗</span></router-link>
                </div>
                <div class="projects-list">
                    <article class="project-item">
                        <div class="project-preview preview-one">
                            <div class="mock-window"><div class="mock-header"><span></span><span></span><span></span><small>SYSTEM / DASHBOARD</small></div><div class="mock-content"><div class="mock-sidebar"></div><div class="mock-main"><div class="mock-block"></div><div class="mock-block short"></div><div class="mock-chart"></div></div></div></div>
                            <span class="preview-label">01 / BUSINESS SYSTEM</span>
                        </div>
                        <div class="project-info">
                            <span class="project-category">BUSINESS SOFTWARE</span><h3>{{ t('home.projects.business.title') }}</h3><p>{{ t('home.projects.business.text') }}</p>
                            <div class="project-tags"><span>Python</span><span>Django</span><span>Vue.js</span></div>
                            <router-link :to="{ name: 'portfolio' }" class="text-link">{{ t('home.projects.view') }} <span>↗</span></router-link>
                        </div>
                    </article>
                    <article class="project-item project-reverse">
                        <div class="project-preview preview-two">
                            <div class="data-visual"><span>DATA ANALYSIS</span><div class="data-bars"><i v-for="height in [35,65,48,85,58,95,72]" :key="height" :style="{ '--height': height + '%' }"></i></div><div class="data-caption">PROCESS / PERFORMANCE / INSIGHTS</div></div>
                            <span class="preview-label">02 / DATA ANALYTICS</span>
                        </div>
                        <div class="project-info">
                            <span class="project-category">DATA & AUTOMATION</span><h3>{{ t('home.projects.data.title') }}</h3><p>{{ t('home.projects.data.text') }}</p>
                            <div class="project-tags"><span>Python</span><span>Data Processing</span><span>Automation</span></div>
                            <router-link :to="{ name: 'portfolio' }" class="text-link">{{ t('home.projects.view') }} <span>↗</span></router-link>
                        </div>
                    </article>
                </div>
            </div>
        </section>

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

        <section class="contact-cta section-padding">
            <div class="container contact-inner">
                <div class="section-heading"><span class="section-number">06 / NEXT STEP</span><span class="section-tag">LET'S BUILD SOMETHING</span></div>
                <h2>{{ t('home.contact.title') }}<br><span class="accent">{{ t('home.contact.accent') }}</span></h2>
                <p>{{ t('home.contact.text') }}</p>
                <router-link :to="{ name: 'contact' }" class="button button-primary">{{ t('home.contact.link') }} <span>↗</span></router-link>
            </div>
        </section>
    </main>
    <footer class="site-footer">
        <div class="container footer-inner">
            <div class="footer-brand"><span class="brand-symbol">TB.</span><span><strong>{{ profile.name }}</strong><small>SOFTWARE & ENGINEERING</small></span></div>
            <span class="footer-copy">© {{ new Date().getFullYear() }} ALL RIGHTS RESERVED.</span>
            <a href="#top" class="back-to-top">BACK TO TOP ↑</a>
        </div>
    </footer>
</template>
