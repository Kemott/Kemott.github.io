<script setup>
import { onMounted } from 'vue'
import HeroSection from '../components/home/HeroSection.vue'
import IntroductionSection from '../components/home/IntroductionSection.vue'
import CapabilitiesSection from '../components/home/CapabilitiesSection.vue'
import SelectedWorkSection from '../components/home/SelectedWorkSection.vue'
import HowIWorkSection from '../components/home/HowIWorkSection.vue'
import TechSection from '../components/home/TechSection.vue'
import ContactSection from '../components/home/ContactSection.vue'


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
        <HeroSection />
        <IntroductionSection />
        <CapabilitiesSection />
        <SelectedWorkSection />
        <HowIWorkSection />
        <TechSection />
        <ContactSection />
    </main>
</template>
